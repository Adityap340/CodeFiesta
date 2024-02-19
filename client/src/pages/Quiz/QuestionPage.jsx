import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

const QuestionPage = () => {
//   const { questionId } = useParams();
//   const [question, setQuestion] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/questions/${questionId}`)
//       .then(response => {
//         setQuestion(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching question:', error);
//       });
//   }, [questionId]);

  return (
    <div>
      {/* {question ? (
        <div>
          <h2>{question.title}</h2>
          <p>{question.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )} */}
      <h1>question quiz</h1>
    </div>
  );
};

export default QuestionPage;
