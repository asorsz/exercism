export const getAliqout = (num) => {
  let aliqout = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) aliqout += i;
  }
  return aliqout;
}

export const classify = (num) => {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.');
  if (num === getAliqout(num)) return 'perfect';
  if (num < getAliqout(num)) return 'abundant';
  if (num > getAliqout(num)) return 'deficient';
};
