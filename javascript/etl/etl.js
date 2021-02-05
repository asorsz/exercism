export const transform = (oldData) => {
  let newData = {};

  for (let point in oldData) {
    oldData[point].forEach(letter => {
      newData[letter.toLowerCase()] = parseInt(point);
    });
  }

  return newData;
};
