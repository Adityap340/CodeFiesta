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
import h from './guessTheLogo/h.jpg';
import i from './guessTheLogo/i.png';
import j from './guessTheLogo/j.png';
import k from './guessTheLogo/k.jpg';
import l from './guessTheLogo/l.png';
import m from './guessTheLogo/m.png';
import n from './guessTheLogo/n.png';
import o from './guessTheLogo/o.png';
import p from './guessTheLogo/p.png';
import r from './guessTheLogo/r.jpg';
import x from './guessTheLogo/x.jpg';
import y from './guessTheLogo/y.jpg';
import z from './guessTheLogo/z.jpg';
import aa from './guessTheLogo/aa.jpg';
import ab from './guessTheLogo/ab.jpg';
import ac from './guessTheLogo/ac.jpg';
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
    { image: a, answer: "angular" },
    { image: b, answer: "opel" },
    { image: c, answer: "blackberry" },
    { image: d, answer: "vue" },
    { image: e, answer: "webpack" },
    { image: f, answer: "redux" },
    { image: g, answer: "solana" },
    { image: h, answer: "national bradcasting company" },
    { image: i, answer: "dart" },
    { image: j, answer: "elm" },
    { image: k, answer: "Atlassian" },
    { image: l, answer: "lisp" },
    { image: m, answer: "hindustan uniliver" },
    { image: n, answer: "capgemini" },
    { image: o, answer: "wipro" },
    { image: p, answer: "cisco" },
    { image: r, answer: "redbull" },
    { image: x, answer: "armani" },
    { image: y, answer: "target" },
    { image: z, answer: "olay" },
    { image: aa, answer: "perl" },
    { image: ab, answer: "pepsi" },
    { image: ac, answer: "starbucks" },
    { image: ad, answer: "bank" },
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
    setCountDownDate(new Date().getTime() + 20 * 1000);
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
        <div id="score" className="text-center mb-4">{score}</div>
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
          disabled={displayedQuestions.length === 19} // Disable the button if it's the last question
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LogoGame;