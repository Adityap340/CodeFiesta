// src/components/Quiz.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);

  const handleSubmit = () => {
    // Send answers to the backend API endpoint
    fetch('http://localhost:3001/submit-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 'user123', // You can replace 'user123' with the actual user ID
        answers: answers
      })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Log the response from the server
      // You can redirect to a thank you page or do something else
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      {/* Quiz Questions and Answers go here */}
      <h1>Quiz Questions</h1>

      {/* Example of collecting answers */}
      <input type="text" value={answers[0] || ''} onChange={e => setAnswers([e.target.value])} />
      <input type="text" value={answers[1] || ''} onChange={e => setAnswers([e.target.value])} />
      
      {/* Button to Submit Answers */}
      <button onClick={handleSubmit}>Submit Answers</button>

      {/* Link to navigate to other pages */}
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default Quiz;