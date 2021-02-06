export const countWords = (str) => {
  const arr = str.toLowerCase().match(/\b([\w'])+\b/g);
  let wordCount = {};

  arr.forEach(word => {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word]++
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
};
