// Quiz.js
import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';

const Quiz = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [questions, setQuestions] = useState([]);
//   const [currentQuestions, setCurrentQuestions] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userAnswer, setUserAnswer] = useState("");
//   const [score, setScore] = useState(0);
//   const [quizTime, setQuizTime] = useState(20 * 60 * 1000); // 20 minutes in milliseconds

//   useEffect(() => {
//     // Fetch questions from the JSON file
//     fetch('/path/to/questions.json')
//       .then(response => response.json())
//       .then(data => setQuestions(data))
//       .catch(error => console.error("Error fetching questions:", error));
//   }, []);

//   useEffect(() => {
//     // Shuffle and set the current questions
//     const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);
//     setCurrentQuestions(shuffledQuestions);
//   }, [questions]);

//   useEffect(() => {
//     // Start the quiz timer
//     const timerId = setInterval(() => {
//       setQuizTime(prevTime => prevTime - 1000);
//       if (quizTime <= 0) {
//         clearInterval(timerId);
//         handleSubmission();
//       }
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [quizTime]);

//   const handleAnswerSelection = (selectedAnswer) => {
//     setUserAnswer(selectedAnswer);
//   };

//   const handleSubmission = () => {
//     const correctAnswer = currentQuestions[currentIndex].correctAnswer;
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//       setScore(prevScore => prevScore + 1);
//     }

//     if (currentIndex === 19) {
//       // If it's the last question, submit the score to the database
//       postScoreToDatabase();
//     } else {
//       // Move to the next question
//       setCurrentIndex(prevIndex => prevIndex + 1);
//       setUserAnswer("");
//     }
//   };

//   const postScoreToDatabase = () => {
//     const finalScore = score;
//     const userEmail = user.email;
//     const options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: userEmail, score: finalScore }),
//     };

//     fetch("https://your-firebase-database-url.firebaseio.com/scores.json", options)
//       .then(response => {
//         if (response.ok) {
//           console.log("Data sent to Firebase");
//           navigate('/quiz-results'); // Redirect to quiz results page
//         } else {
//           throw new Error('Failed to post data to Firebase');
//         }
//       })
//       .catch(error => console.error("Error sending data to Firebase:", error));
//   };

//   if (currentQuestions.length === 0) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <div>
        <b>Timer: </b>{Math.floor((quizTime % (1000 * 60 * 60)) / (1000 * 60))}:
        {Math.floor((quizTime % (1000 * 60)) / 1000)}
      </div>
      <div>
        <h2>{currentQuestions[currentIndex].question}</h2>
        <ul>
          {currentQuestions[currentIndex].options.map((option, index) => (
            <li key={index} onClick={() => handleAnswerSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;
