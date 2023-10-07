import React, { Component, useState } from "react";

const Insert = ({ currentCard, onCheckAnswer, isCorrect, showAnswer, userGuess, setUserGuess }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onCheckAnswer(userGuess);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="response">Guess the answer here: </label>
                <input 
                    type="text" 
                    id="response" 
                    name="response"
                    value={userGuess}
                    onChange={(e) => setUserGuess(e.target.value)}
                    style={{ border: isCorrect === true ? "2px solid green" : isCorrect === false ? "2px solid red" : "none" }}
                    disabled={showAnswer}
                />
                <button type='submit' className="button submit" disabled={showAnswer}>Submit Guess</button>
            </form>
        </div>
    );
  
};

export default Insert;