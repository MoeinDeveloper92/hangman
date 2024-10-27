import React from 'react';
//the reason I put this inside the var is I want to show them conditionally
const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '5px solid black',
      position: 'absolute',
      top: '50px',
      right: '-20px',
    }}
  />
);
const BODY = (
  <div
    style={{
      width: '5px',
      height: '100px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '100px',
      right: '2px',
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: '80px',
      height: '5px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '130px',
      right: '-80px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: '80px',
      height: '5px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '130px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: '80px',
      height: '5px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '194px',
      right: '-72px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: '80px',
      height: '5px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '193px',
      right: '2px',
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangManDrawingProps = {
  numberOfGuesses: number;
};

const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PART.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          backgroundColor: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          backgroundColor: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          backgroundColor: 'black',
          marginLeft: '120px',
        }}
      />
      <div
        style={{ height: '10px', width: '250px', backgroundColor: 'black' }}
      />
    </div>
  );
};

export default HangManDrawing;
