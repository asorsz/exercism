export const isIsogram = (word) => {
  let arr = word.toLowerCase().match(/[a-zA-Z]/g);
  return word === '' || new Set(arr).size === arr.length;
};
