export const transpose = (input) => {
  if (input.length === 0) return input
  
  let lengths = input.map(a => a.length);
  let length = Math.max(...lengths);
  let maxIndex = lengths.indexOf(length);
  
  return input
    .map(elem => elem.split(''))[maxIndex]
    .map((_,i) => i === length - 1
      ? input.map(x => x[i] || ' ').join('').trimEnd()
      : input.map(x => x[i] || ' ').join('')
    );
}
