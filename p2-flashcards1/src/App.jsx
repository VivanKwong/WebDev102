import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

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

  useEffect(() => {
    const sortedCards = [...cardSet].sort(() => Math.random() - 0.5);
    if (!cardOrder.every((card, index) => card.question === sortedCards[index].question)) {
      setCardOrder(sortedCards);
    }
  }, [cardSet, cardOrder]);

  const handlePrevCard = () => {
    setShowAnswer(false);
    const prevIndex = (currentCardIndex - 1 + cardSet.length) % cardSet.length;
    setCurrentCardIndex(prevIndex)
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    const nextIndex = (currentCardIndex + 1) % cardSet.length;
    setCurrentCardIndex(nextIndex);
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <h2>/ᐠ - ˕ -マ Ⳋ Test your knowledge of everything cats here !</h2>
      <h3>Number of Cards: {cardSet.length}</h3>
      <Card question={currentCard.question} answer={currentCard.answer}/>
      <button onClick={handlePrevCard}>←</button>
      <button onClick={handleNextCard}>→</button>
    </div>
  )
}

export default App