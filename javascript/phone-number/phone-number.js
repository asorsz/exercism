export const clean = (str) => {
  if (str.match(/[a-z]/gi)) throw new Error('Letters not permitted');
  if (str.match(/[^\d().+-\s]/g)) throw new Error('Punctuations not permitted');
  let clean = str.match(/\d/g).join('');
  if (clean.length > 11) throw new Error('More than 11 digits');
  if (clean.length === 11 && clean[0] !== '1') throw new Error('11 digits must start with 1');
  if (clean.length === 11 && clean[0] === '1') clean = clean.slice(1);
  if (clean.length !== 10) throw new Error('Incorrect number of digits');
  if (clean[0] === '0') throw new Error('Area code cannot start with zero');
  if (clean[0] === '1') throw new Error('Area code cannot start with one')
  if (clean[3] === '0') throw new Error('Exchange code cannot start with zero');
  if (clean[3] === '1') throw new Error('Exchange code cannot start with one');
  return clean;
};
