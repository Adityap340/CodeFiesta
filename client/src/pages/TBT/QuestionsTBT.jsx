import React from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
const QuestionsTBT = () => {
    // const { questionId } = useParams();
    // const [question, setQuestion] = useState(null);
  
    // useEffect(() => {
    //   axios.get(`http://localhost:4040/questions/${questionId}`)
    //     .then(response => {
    //       setQuestion(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching question:', error);
    //     });
    // }, [questionId]);
  
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
        <h1>Questions TBT</h1>
      </div>
    );
  };

export default QuestionsTBT