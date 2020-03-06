import React from 'react';

function RemainingCharacters({charCount}) {
  let maxChars = 100;
  let remainingChars = maxChars - charCount;
  if (remainingChars <= 0) {
    return (<p className="counter" style={{color: "red"}}>Characters left: {remainingChars}</p>);
  }
  return (<p className="counter">Characters left: {remainingChars}</p>);
}

export default RemainingCharacters