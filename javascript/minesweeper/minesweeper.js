export const annotate = (input) => {
  const rows = input.length;
  if (rows === 0) return input;

  const cols = input[0].length;
  if (cols === 0) return input;

  function getSurrounding(x, y) {
    let surrounding = [
      [x - 1, y - 1],[x - 1, y],[x - 1, y + 1],
      [x, y - 1],[x, y + 1],
      [x + 1, y - 1],[x + 1, y],[x + 1, y + 1]
    ]
    .filter(coord => coord.every(a => a >= 0))
    .filter(coord => coord[0] < rows)
    .filter(coord => coord[1] < cols);
    return surrounding;
  }

  let output = [];
  for (let i = 0; i < rows; i++) {
    let rowStr = ''
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === "*") {
        rowStr = rowStr.concat("*")
      } else {
        let surrounding = getSurrounding(i,j);
        let mines = surrounding.map(coord => input[coord[0]][coord[1]]).filter(x => x === "*").length;
        rowStr = mines === 0 ? rowStr.concat(' ') : rowStr.concat(mines);
      }
    }
    output.push(rowStr);
  } 
  return output;
};
