import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className='card' onClick={handleCardClick}>
      <div className={`card-content ${showAnswer ? 'answer' : 'question'}`}>{showAnswer ? <div className="answer">{answer}</div> : <div className="question">{question}</div>}
      </div>
    </div>
  );
};

export default Card;