export const rows = (numRows) => {
  let result = [];
  for (let i = 1; i <= numRows; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      const nextNum = (j === 1 || j === i)
                    ? 1
                    : result[i-2][j-2] + result[i-2][j-1];
      row.push(nextNum);
    }
    result.push(row);
  }
  return result;
};
