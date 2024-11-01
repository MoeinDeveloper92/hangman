import React from 'react';

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};

const HangManWord = (props: HangManWordProps) => {
  const { guessedLetters, wordToGuess, reveal } = props;
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
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
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
