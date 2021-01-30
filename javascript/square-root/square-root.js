export const squareRoot = radicand => {
 
  function calcGuess(lastGuess) {
    let guess = lastGuess - (((lastGuess ** 2) - radicand)/(lastGuess * 2));
    let guessRounded = Math.round((guess + Number.EPSILON) * 100) / 100;
    return guessRounded;
  }
  
  let guess = 1;
  let lastGuess;
  do {
    lastGuess = guess;
    guess = calcGuess(lastGuess);
  } while (lastGuess !== guess)
  return guess;
};
