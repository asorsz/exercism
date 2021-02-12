export const convert = (ocr) => {
  let grid = ocr.split('\n').map(str => str.match(/.{3}/g));
  let cols = grid[0].length;
  let rows = grid.length / 4;
  let digits = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    let startX = 4 * i;
    for (let j = 0; j < cols; j++) {
      row.push(
        grid[startX][j] +
        grid[startX + 1][j] +
        grid[startX + 2][j] +
        grid[startX + 3][j]
      );
    }
    digits.push(row);
  }
  
  return digits.map(row =>
    row.map(str =>
      numberMap[str] !== undefined ? numberMap[str] : '?'
    ).join('')
  ).join(',');
};

export const numberMap = {
  ' _ | ||_|   ': 0,
  '     |  |   ': 1,
  ' _  _||_    ': 2,
  ' _  _| _|   ': 3,
  '   |_|  |   ': 4,
  ' _ |_  _|   ': 5,
  ' _ |_ |_|   ': 6,
  ' _   |  |   ': 7,
  ' _ |_||_|   ': 8,
  ' _ |_| _|   ': 9,
};

