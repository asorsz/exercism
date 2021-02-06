export class Squares {
  constructor(max) {
    this.max = max;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.max; i++) {
      sum += i ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    return (this.max * (this.max + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
