import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Insert from './Components/Insert';

const App = () => {
  const cardSet = [
    { question: 'How much do cats sleep?', answer: 'Cat sleep around 13-16 hours a day, or about 70% of their lives.' },
    { question: 'What is the belly flap of a cat called?', answer: 'A primordial pouch, which is used to store fat and protect organs.' },
    { question: 'Which of the five senses are a cat\'s best?', answer: 'Hearing. Cats hear 4 times better than humans.' },
    { question: 'What is toxoplasmosis?', answer: 'A parasite spread through cat poop that makes humans care more about cats.' },
    { question: 'Do cats enjoy sweet treats?', answer: 'Cats can\'t taste sweet things, though they might want to try it.' },
    { question: 'What makes purring healthy?', answer: 'The purring frequency aides in tissue regeneration and bone reparation.' },
    { question: 'How high can a cat jump?', answer: 'Cats can jump about six times their own height.' },
    { question: 'How many bones do cats have?', answer: 'The average cat has 244 bones.' },
    { question: 'What is a group of cats called?', answer: 'A group of cats is called a clowder.' },
    { question: 'How many taste buds do cats have?', answer: 'The average cat has 473 taste buds on their tongue.' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardOrder, setCardOrder] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const currentCard = cardSet[currentCardIndex];
  const [isCorrect, setIsCorrect] = useState(null);
  const [userGuess, setUserGuess] = useState("");

  const shuffleCards = () => {
    const shuffledCards = [...cardSet].sort(() => Math.random() - 0.5);
    setCardOrder(shuffledCards);
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
    setIsCorrect(null)
    setUserGuess("")
  };

  const handlePrevCard = () => {
    setShowAnswer(false);
    const prevIndex = (currentCardIndex - 1 + cardSet.length) % cardSet.length;
    setCurrentCardIndex(prevIndex)
    setIsCorrect(null)
    setUserGuess("")
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    const nextIndex = (currentCardIndex + 1) % cardSet.length;
    setCurrentCardIndex(nextIndex);
    setIsCorrect(null)
    setUserGuess("")
  };

  const onCheckAnswer = (userGuess) => {
    const isCorrectGuess = userGuess.toLowerCase() === currentCard.answer.toLowerCase();
    setIsCorrect(isCorrectGuess);
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <h2>/ᐠ - ˕ -マ Ⳋ Test your knowledge of everything cats here !</h2>
      <h3>Number of Cards: {cardSet.length}</h3>
      <Card question={currentCard.question} answer={currentCard.answer} onCardClick={() => setShowAnswer(false)} disabled={showAnswer}/>
      <Insert 
        currentCard={currentCard} 
        onCheckAnswer={onCheckAnswer} 
        isCorrect={isCorrect}
        showAnswer={showAnswer}
        userGuess={userGuess}
        setUserGuess={setUserGuess}
      />
      <button onClick={handlePrevCard}>←</button>
      <button onClick={handleNextCard}>→</button>
      <button onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  )
}

export default App