export class NucleotideCounts {
  static parse(str) {
    if (str.match(/[^ACGT]/g)) throw new Error('Invalid nucleotide in strand');

    let obj = {A: 0, C: 0, G: 0, T: 0};

    for (let l of str) {
      obj[l]++;
    }

    return `${obj.A} ${obj.C} ${obj.G} ${obj.T}`;
  }
}
