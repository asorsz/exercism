export class Rectangles {
  static count(input) {
    let count = 0;
    let grid = input.map(str => str.split(''));

    grid.forEach((row, i) => {
      row.forEach((col, j) => {
        if (col === '+') {
          for (let k = j + 1; k < row.length; k++) {
            if (row[k] !== '-' && row[k] !== '+' ) {
              return
            } else if (row[k] === '+') {
              for (let l = i + 1; l < grid.length; l++) {
                if ((grid[l][j] !== '+' && grid[l][j] !== '|') || (grid[l][k] !== '+' && grid[l][k] !== '|')) {
                  l = grid.length;
                }
                else if (grid[l][j] === '+' && grid[l][k] === '+') {
                  count++;
                }
              }
            }
          }
        }
      });
    });
    return count;
  }
}
