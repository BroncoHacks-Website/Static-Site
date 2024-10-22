import React, { useState } from 'react';
import '../styles/FAQ.css';
// import '../styles/FAQuestions.css'


const FAQBoxes = ({ question, answer}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="question-rectangle" onClick={toggleAnswer}>
        <p>{question}</p>
        <div className={`arrow ${isActive ? 'down' : 'right'}`}></div>
      </div>
      {/* {isActive && ( */}
        <div className="answer-rectangle">
          
            <p>{answer}</p>
          
        </div>
      {/* )} */}
    </div>
  );
};

export default FAQBoxes;


