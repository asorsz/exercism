export const isPangram = (str) => alphabet
  .split('')
  .filter(l => str.toLowerCase().indexOf(l) === -1)
  .length === 0;

 export const alphabet = 'abcdefghijglmnopqrstuvwxyz';
