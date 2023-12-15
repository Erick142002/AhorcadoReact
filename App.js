import React, { useState } from 'react';
import GameScreen from './GameScreen';
import ResultScreen from './ResultScreen';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'game', 'result'
  const [won, setWon] = useState(false); // true si el jugador gana

  const startGame = (name) => {
    setPlayerName(name);
    setGameState('game');
  };

  const handleGameOver = (result) => {
    setWon(result);
    setGameState('result');
  };

  return (
    <div>
      {gameState === 'welcome' && (
        <div>
          <h1>Bienvenido al Juego del Ahorcado</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={() => startGame(playerName)}>Comenzar Juego</button>
        </div>
      )}
      {gameState === 'game' && (
        <GameScreen playerName={playerName} onGameOver={handleGameOver} />
      )}
      {gameState === 'result' && (
        <ResultScreen playerName={playerName} won={won} />
      )}
    </div>
  );
}

export default App;
