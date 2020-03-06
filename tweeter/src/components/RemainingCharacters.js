import React from 'react';

function RemainingCharacters({charCount}) {
  let maxChars = 100;
  let remainingChars = maxChars - charCount;
  if (remainingChars <= 0) {
    return (<div><p className="counter" style={{color: "red"}}>Characters left: {remainingChars}</p></div>);
  }
  return (<div><p className="counter">Characters left: {remainingChars}</p></div>);
}

export default RemainingCharacters