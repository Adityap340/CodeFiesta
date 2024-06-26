import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

import a from './guessTheLogo/a.png';
import b from './guessTheLogo/b.png';
import c from './guessTheLogo/c.png';
import d from './guessTheLogo/d.png';
import e from './guessTheLogo/e.png';
import f from './guessTheLogo/f.png';
import g from './guessTheLogo/g.png';
import h from './guessTheLogo/h.png';
import i from './guessTheLogo/i.png';
import j from './guessTheLogo/j.png';
import k from './guessTheLogo/k.png';
import l from './guessTheLogo/l.png';
import m from './guessTheLogo/m.png';
import n from './guessTheLogo/n.jpg';
import o from './guessTheLogo/o.png';
import p from './guessTheLogo/p.png';
import r from './guessTheLogo/r.png';
import u from './guessTheLogo/u.png';
import y from './guessTheLogo/y.png';
import z from './guessTheLogo/z.png';
import aa from './guessTheLogo/aa.png';
import ab from './guessTheLogo/ab.png';
import ac from './guessTheLogo/ac.png';
import ad from './guessTheLogo/ad.jpg';

const LogoGame = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useContext(AuthContext);

  const [countDownDate, setCountDownDate] = useState(new Date().getTime() + 15 * 60 * 1000);
  const [distance, setDistance] = useState(0);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [logoData] = useState([
    { image: a, answer: "nvidia" },
    { image: b, answer: "openai" },
    { image: c, answer: "docker" },
    { image: d, answer: "shopify" },
    { image: e, answer: "twitch" },
    { image: f, answer: "red hat" },
    { image: g, answer: "solana" },
    { image: h, answer: "oracle" },
    { image: i, answer: "adidas" },
    { image: j, answer: "reddit" },
    { image: k, answer: "chanel" },
    { image: l, answer: "ferrari" },
    { image: m, answer: "airbnb" },
    { image: n, answer: "dropbox" },
    { image: o, answer: "paypal" },
    { image: p, answer: "cisco" },
    { image: r, answer: "flutter" },
    { image: u, answer: "wordpress" },
    { image: y, answer: "kubernetes" },
    { image: z, answer: "medium" },
    { image: aa, answer: "domino's" },
    { image: ab, answer: "pepsi" },
    { image: ac, answer: "starbucks" },
    { image: ad, answer: "audi" },
  ]);

  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [intervalId, setIntervalId] = useState(null); // Define intervalId state

  useEffect(() => {
    next();
  }, []);

  const next = () => {
    if (displayedQuestions.length === 20 || distance < 0) {
      clearInterval(intervalId);
      if (distance < 0) {
        postScoreToDatabase();
      }
      return;
    }

    let sel;
    do {
      sel = Math.floor(Math.random() * logoData.length);
    } while (displayedQuestions.includes(sel));

    setDisplayedQuestions((prev) => [...prev, sel]);
    setCurrentIndex(sel);
    setCountDownDate(new Date().getTime() + 17 * 1000);
  };

  const handleSubmission = () => {
    const set_answer = userAnswer.toLowerCase();
    if (logoData[currentIndex].answer === set_answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserAnswer("");

    if (displayedQuestions.length === 19) {
      // If it's the last question, submit the score to the database
      postScoreToDatabase();
    } else {
      next(); // Otherwise, move to the next question
    }
  };

  const postScoreToDatabase = () => {
    const finalScore = score;
    const userEmail = user.email;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, score: finalScore }),
    };

    fetch("https://codefiesta-7bc59-default-rtdb.firebaseio.com/LLM.json", options)
      .then(response => {
        if (response.ok) {
          console.log("Data sent to Firebase");
          navigate('/select');
        } else {
          throw new Error('Failed to post data to Firebase');
        }
      })
      .catch(error => console.error("Error sending data to Firebase:", error));
  };

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date().getTime();
      const newDistance = countDownDate - now;

      setDistance(newDistance);

      if (newDistance < 0) {
        clearInterval(id);
        handleSubmission();
      }
    }, 1000);
    setIntervalId(id); // Set intervalId state
    return () => clearInterval(id);
  }, [countDownDate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <b>Timer-</b> {Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}:
          {Math.floor((distance % (1000 * 60)) / 1000)}
        </div>
        <img className="mx-auto mb-4" src={logoData[currentIndex].image} alt="logo" />
        <div id="timer"></div>
        <input
          className="w-full p-2 border rounded answer"
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer..."
        />
        <button
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSubmission}
          disabled={displayedQuestions.length === 19}
        >
          {displayedQuestions.length === 19 ? 'Submit' : 'Next'}
        </button>
        <br />
        <br />
        <p>{displayedQuestions.length === 19 ? 'Note: Test will auto submit after the timer goes off!' : ''}</p>
      </div>
    </div>
  );
};

export default LogoGame;