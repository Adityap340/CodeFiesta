import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import questionsData from './questions.json';

const Quiz = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizTime, setQuizTime] = useState(30 * 1000 * 10);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleAnswerSelection = (selectedAnswer, index) => {
    setUserAnswer(selectedAnswer);
    setSelectedOptionIndex(index);
  };

  const handleSubmission = () => {
    const correctAnswer = currentQuestions[currentIndex].correctAnswer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentIndex === 19) {
      postScoreToDatabase();
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setUserAnswer("");
      setSelectedOptionIndex(null); // Reset selected option after moving to the next question
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

    fetch("https://quiz-score-c834e-default-rtdb.firebaseio.com/scores.json", options)
      .then(response => {
        if (response.ok) {
          console.log("Data sent to Firebase");
          navigate('/select'); // Redirect to quiz results page
        } else {
          throw new Error('Failed to post data to Firebase');
        }
      })
      .catch(error => console.error("Error sending data to Firebase:", error));
  };

  useEffect(() => {
    const shuffledQuestions = questionsData.sort(() => Math.random() - 0.5).slice(0, 20);
    setCurrentQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setQuizTime(prevTime => prevTime - 1000);
      if (quizTime === 0) {
        clearInterval(timerId);
        postScoreToDatabase();
        navigate('/select'); // Redirect to quiz results page
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [quizTime, navigate]); // Include navigate in the dependency array


  if (currentQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (<div className="p-4 mx-auto max-w-md">
  <div className="text-center">
    <b>Timer: </b>{Math.floor((quizTime % (1000 * 60 * 60)) / (1000 * 60))}:
    {Math.floor((quizTime % (1000 * 60)) / 1000)}
  </div>
  <div className="mt-4">
    <h2 className="text-lg font-bold mb-4 text-center">{currentQuestions[currentIndex].question}</h2>
    <div>
      {currentQuestions[currentIndex].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerSelection(option, index)}
          className={`w-full bg-sky-500 text-white px-4 py-2 rounded mb-2 cursor-pointer focus:outline-none ${selectedOptionIndex === index ? 'opacity-70' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
  <div className="mt-4 text-center">
    <button
      onClick={handleSubmission}
      className={`w-full bg-green-600 text-white px-4 py-2 rounded cursor-pointer focus:outline-none ${currentIndex === 19 ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={currentIndex === 19}
    >
      {currentIndex === 19 ? 'Submit' : 'Next'}
    </button>
    <br />
    <br />
    <p>{currentIndex === 19 ? 'Note: This is the last question, Select desired option and Test will auto-submit after the timer goes off!' : ''}</p>
  </div>
</div>


  );
};

export default Quiz;
