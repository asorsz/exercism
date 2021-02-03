export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
  }

  get isEquilateral() {
    return this.side1 === this.side2 && 
      this.side1 === this.side3 &&
      this.side1 !== 0;
  }

  get isIsosceles() {
    return (this.side1 === this.side2 && this.side1 + this.side2 > this.side3) ||
      (this.side1 === this.side3 && this.side1 + this.side3 > this.side2) ||
      (this.side2 === this.side3 && this.side2 + this.side3 > this.side1);
  }

  get isScalene() {
    return this.side1 !== this.side2 && this.side2 !== this.side3 && this.side3 !== this.side1 &&
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side3 + this.side1 > this.side2;
  }
}
