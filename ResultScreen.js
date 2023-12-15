import React from 'react';

function ResultScreen({ playerName, won }) {
  return (
    <div>
      {won ? (
        <p>Felicidades, {playerName}, has ganado el juego del ahorcado.</p>
      ) : (
        <p>¡Game Over! Lo siento, {playerName}, has perdido el juego.</p>
      )}
    </div>
  );
}

export default ResultScreen;


