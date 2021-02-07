export const findAnagrams = (str, arr) => {
  let strAlph = str.toLowerCase().split('').sort().join('');
  let results = [];

  arr.forEach(word => {
    if (strAlph === word.toLowerCase().split('').sort().join('') &&
        str.toLowerCase() !== word.toLowerCase()) results.push(word);
  });

  return results;
};
