export const proverb = (...args) => {
  let proverb = '';
  const lastI = args.length - 1;

  for (let i = 0; i < lastI; i++) {
    if (typeof args[i+1] === 'string') {
      proverb +=
        `For want of a ${args[i]} the ${args[i+1]} was lost.\n`
    }
  }

  if (lastI >= 0) {
    proverb += 'And all for the want of a'
      + `${typeof args[lastI] === 'object'
                  ? ' ' + args[lastI].qualifier
                  : ''}`
      + ` ${args[0]}.`
  }

  return proverb;
};
