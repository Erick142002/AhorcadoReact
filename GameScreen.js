import React, { useState, useEffect } from 'react';

const words = ['React', 'JavaScript', 'HTML', 'CSS', 'Node'];

function GameScreen({ playerName }) {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const maxAttempts = 7;
  const [attempts, setAttempts] = useState(maxAttempts);
  const [gameResult, setGameResult] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex].toLowerCase());
  }, []);

  const handleLetterGuess = (letter) => {
    const lowercaseLetter = letter.toLowerCase();
    if (!guesses.includes(lowercaseLetter)) {
      setGuesses([...guesses, lowercaseLetter]);
      if (!word.includes(lowercaseLetter)) {
        setAttempts(attempts - 1);
      }
    }
  };

  const renderedWord = word
    .split('')
    .map((letter) => (guesses.includes(letter) || !letter.match(/[a-z]/i) ? letter : '_'))
    .join(' ');

  useEffect(() => {
    if (renderedWord === word && word !== '') {
      setGameResult('Victoria');
    } else if (attempts === 0) {
      setGameResult('GameOver');
    }
  }, [renderedWord, word, attempts]);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div>
      <h2>Jugador: {playerName}</h2>
      <p>Intentos restantes: {attempts}</p>
      <p>{renderedWord}</p>
      <div>
        {alphabet.split('').map((letter, index) => (
          <button
            key={index}
            onClick={() => handleLetterGuess(letter)}
            disabled={gameResult || guesses.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      {gameResult && <p>{gameResult}</p>}
    </div>
  );
}

export default GameScreen;
