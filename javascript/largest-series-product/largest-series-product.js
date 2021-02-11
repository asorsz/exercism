export const largestProduct = (str, span) => {
  if (span < 0) throw new Error('Span must be greater than zero');
  if (span === 0) return 1;
  if (str.match(/[^0-9]/g)) throw new Error('Digits input must only contain digits');
  if (str.length < span) throw new Error('Span must be smaller than string length');
    
  let arr = [];
  for (let i = 0; i <= str.length - span; i++) {
    arr.push(str.substr(i,span))
  }
    
  return Math.max(...arr
    .map(el => el
      .split('')
      .reduce((x, y) => x * y)
    )
  )
};
