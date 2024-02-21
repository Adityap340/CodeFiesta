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
  const [quizTime, setQuizTime] = useState(1 * 60 * 1000);
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
      if (quizTime <= 0) {
        clearInterval(timerId);
        postScoreToDatabase();
        // Automatically submit when the time runs out
        // Redirect to selection page
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [quizTime]);

  if (currentQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <div>
        <b>Timer: </b>{Math.floor((quizTime % (1000 * 60 * 60)) / (1000 * 60))}:
        {Math.floor((quizTime % (1000 * 60)) / 1000)}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{currentQuestions[currentIndex].question}</h2>
        <div>
          {currentQuestions[currentIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option, index)}
              style={{
                backgroundColor: selectedOptionIndex === index ? '#3490dc' : '#63b3ed',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                marginRight: '0.5rem',
                marginBottom: '0.5rem',
                cursor: 'pointer',
                outline: 'none',
                border: 'none',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={handleSubmission}
          style={{
            backgroundColor: '#38a169',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            outline: 'none',
            border: 'none',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
