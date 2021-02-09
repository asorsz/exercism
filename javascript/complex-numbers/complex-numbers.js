export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  add(complex) {
    return new ComplexNumber(
      this.a + complex.a,
      this.b + complex.b
      );
  }

  sub(complex) {
    return new ComplexNumber(
      this.a - complex.a,
      this.b - complex.b
      );
  }

  div(complex) {
    return new ComplexNumber(
      (this.a * complex.a + this.b * complex.b) / (complex.a ** 2 + complex.b ** 2),
      (this.b * complex.a - this.a * complex.b) / (complex.a ** 2 + complex.b ** 2)
      );
  }

  mul(complex) {
    return new ComplexNumber(
      this.a * complex.a - this.b * complex.b,
      this.b * complex.a + this.a * complex.b
      );
  }

  get abs() {
    return (this.a ** 2 + this.b ** 2) ** 0.5;
  }

  get conj() {
    return new ComplexNumber(this.a, this.b !== 0 ? -this.b : 0);
  }

  get exp() {
    return new ComplexNumber(
      (Math.E ** this.a) * Math.cos(this.b),
      (Math.E ** this.a) * Math.sin(this.b)
      )
  }
}
