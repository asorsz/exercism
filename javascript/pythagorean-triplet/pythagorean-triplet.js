export function triplets({ minFactor = 1, maxFactor, sum }) {
  let mina = minFactor ? minFactor : 1;
  let maxa = (sum / 3) - 1;
  let minb = mina + 1;
  let maxb = maxFactor ? Math.min((sum / 2) - 1, maxFactor) : (sum / 2) - 1;
  
  let result = []
  
  for (let a = mina; a <= maxa; a++) {
    for (let b = minb; b <= maxb; b++) {
      let c = sum - b - a;
      if ((!maxFactor || c < maxFactor) 
            && a < b
            && b < c
            && a**2 + b**2 === c**2
      ) result.push(new Triplet(a, b, c));
    }
  }
  return result;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c]
  }
}
