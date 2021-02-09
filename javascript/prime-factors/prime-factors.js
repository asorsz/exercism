export const primeFactors = (num) => {
  let rem = num;
  let primeFactors = [];
  let div = 2;

  while (rem > 1) {
    if (rem % div === 0) {
      primeFactors.push(div);
      rem /= div;
    } else {
      div++;
    }
  }

  return primeFactors;
};
