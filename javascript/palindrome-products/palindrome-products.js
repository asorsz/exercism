export class Palindromes {
  constructor(min, max, palindromes) {
    this.min = min;
    this.max = max;
    this.palindromes = palindromes;
  }
  
  static generate({maxFactor, minFactor}) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');
    let arr = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = minFactor; j <= maxFactor; j++) {
        let product = i * j;
        let string = product.toString();
        if (string === string.split('').reverse().join('')) arr.push(product);
      }
    }
    return new Palindromes(minFactor, maxFactor, arr.sort((a, b) => a - b));
  }

  getFactors(num) {
    let factors = [];
    let min = this.min;
    let max = Math.min(this.max, Math.sqrt(num))
    for (let i = min; i <= max; i++) {
      if (num % i === 0 &&
          num / i >= this.min &&
          num / i <= this.max) factors.push([i, num / i]);
    }
    return factors;
  }

  get smallest() {
    let min = this.palindromes[0]
            ? this.palindromes[0]
            : null;
    return {
      value: min,
      factors: this.getFactors(min)}
  }

  get largest() {
    let max = this.palindromes[this.palindromes.length - 1]
            ? this.palindromes[this.palindromes.length - 1]
            : null;
    return {
      value: max,
      factors: this.getFactors(max)}
  }
}
