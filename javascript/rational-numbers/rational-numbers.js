export class Rational {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(that) {
    return new Rational(
      ((this.a * that.b) + (that.a * this.b)),
      (this.b * that.b),
    ).reduce();
  }

  sub(that) {
    return new Rational(
      ((this.a * that.b) - (that.a * this.b)),
      (this.b * that.b),
    ).reduce();
  }

  mul(that) {
    return new Rational((this.a * that.a), (this.b * that.b)).reduce();
  }

  div(that) {
    return new Rational((this.a * that.b), (that.a * this.b)).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b))
  }

  exprational(x) {
    const n = Math.abs(x);
    return new Rational(this.a ** n, this.b ** n);
  }

  expreal(x) {
    return +(x ** (this.a / this.b)).toFixed(2);
  }

  reduce() {
    let gcd = getGCD(this.a, this.b);
    gcd = this.b < 0 ? -gcd : gcd;
    return new Rational(this.a / gcd, this.b / gcd);
  }
}

export const getGCD = (a, b) => {
  if (b === 0) return Math.abs(a);
  return getGCD(b, a % b);
};
