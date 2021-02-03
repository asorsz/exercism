export class QueenAttack {
  constructor(input) {
    this.black = input && input['black'] ? input['black'] : [0, 3];
    this.white = input && input['white'] ? input['white'] : [7, 3];
    this.check();
  }

  check() {
    if (this.black[0] === this.white[0] && this.black[1] === this.white[1]) {
      throw new Error('Queens cannot share the same space')
    }
    if (this.black[0] > 7 || this.black[1] > 7 || this.black[0] < 0 || this.black[1] < 0) {
      throw new Error('Queen must be placed on the board')
    }
    if (this.white[0] > 7 || this.white[1] > 7 || this.white[0] < 0 || this.white[1] < 0) {
      throw new Error('Queen must be placed on the board')
    }
  }

  toString() {
    let board = new Array(8).fill('').map(() => new Array(8).fill('_'));
    board[this.black[0]][this.black[1]] = "B";
    board[this.white[0]][this.white[1]] = "W";
    return board.map(row => row.join(' ')).join('\n');

  }

  get canAttack() {
    if (this.black[0] === this.white[0]|| this.black[1] === this.white[1]) {
      return true;
    } else if (this.black[0] + this.black[1] === this.white[0] + this.white[1] || this.black[0] - this.black[1] === this.white[0] - this.white[1]) {
      return true;  
    } else {
      return false
    }
  }
}
