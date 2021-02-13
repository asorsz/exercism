export const saddlePoints = (matrix) => {
  let points = [];

  matrix.forEach((row, y) => {
    row.forEach((point, x) => {
      
      let checkRow = row.every(el => point >= el);
      let checkCol = matrix.every(row => point <= row[x]);

      if (checkRow && checkCol) points.push({row: y+1, column: x+1})

    });
  });

  return points;
};
