export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, i) => this.matrix.map(x => x[i]))
  }
}
