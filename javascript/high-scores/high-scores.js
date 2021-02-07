export class HighScores {
  constructor(scores) {
    this.arr = scores;
  }

  get scores() {
    return this.arr;
  }

  get latest() {
    return this.arr[this.arr.length - 1];
  }

  get personalBest() {
    return Math.max(...this.arr);
  }

  get personalTopThree() {
    return this.arr.sort((a, b) => b - a).slice(0,3);
  }
}
