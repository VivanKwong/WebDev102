import React, { useState, useEffect } from 'react';

const Card = ({ question, answer, onCardClick, disabled }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    if (!disabled && !showAnswer) {
      setShowAnswer(!showAnswer);
      onCardClick();
    }
  };

  useEffect(() => {
    setShowAnswer(false); 
  }, [question, answer]);

  return (
    <div className={`card ${disabled ? 'disabled' : ''}`} onClick={handleCardClick}>
      <div className={`card-content ${showAnswer ? 'answer' : 'question'}`}>{showAnswer ? <div className="answer">{answer}</div> : <div className="question">{question}</div>}
      </div>
    </div>
  );
};

export default Card;