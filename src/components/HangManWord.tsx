import React from 'react';

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangManWord = (props: HangManWordProps) => {
  const { guessedLetters, wordToGuess } = props;
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }}>
          <span
            key={index}
            style={{
              visibility: guessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangManWord;
