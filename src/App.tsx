import React, { KeyboardEvent, useEffect, useState } from 'react';
import words from './wordList.json';
import HangManDrawing from './components/HangManDrawing';
import HangManWord from './components/HangManWord';
import KeyBoard from './components/KeyBoard';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };
  useEffect(() => {
    const handler = (e: React.KeyboardEvent) => {
      const key = e.key;

      if (!key.match('/^[a-z]$/')) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose</div>
      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <KeyBoard />
      </div>
    </div>
  );
};

export default App;
