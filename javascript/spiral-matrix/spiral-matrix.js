export class SpiralMatrix {
  static ofSize(size) {
    let spiral = []
    for (let i = 0; i < size; i++) {
      spiral.push(new Array(size).fill(0));
    }

    let currentNum = 1;
    let x = 0;
    let y = 0;
    let moveX = 0;
    let moveY = 1;
 
    while (currentNum <= size ** 2) {
      spiral[x][y] = currentNum;
      if (spiral[x + moveX] === undefined || spiral[x + moveX][y + moveY] !== 0) {
        if (moveX === 0) {
          moveX = moveY;
          moveY = 0;
        } else {
          moveY = -moveX;
          moveX = 0
        }
      }
      x += moveX;
      y += moveY;
      currentNum++;
    }
    return spiral;
  }
}

