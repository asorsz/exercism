export const square = (sq) => {
  if (sq < 1 || sq > 64) throw new Error('square must be between 1 and 64');
  return BigInt(2 ** (sq-1))
};

export const total = () => {
  let sum = 0;
  for (let i = 0; i <=63; i++) {
    sum = BigInt(sum) + BigInt(2 ** i);
  }
  return sum;
};
