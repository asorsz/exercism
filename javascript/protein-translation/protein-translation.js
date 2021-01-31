export const PROTEINS = [
  ['Methionine', ['AUG']],
  ['Phenylalanine', ['UUU', 'UUC']],
  ['Leucine', ['UUA', 'UUG']],
  ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
  ['Tyrosine', ['UAU', 'UAC']],
  ['Cysteine', ['UGU', 'UGC']],
  ['Tryptophan', ['UGG']],
];

export const STOPS = ['UAA', 'UAG', 'UGA'];

export const translate = str => {
  const errorHandler = () => {
    throw new Error('Invalid codon')
  };
  
  let proteins = [];

  if (str === undefined) return proteins;
  if (str.match(/[^AUGC]/g)) errorHandler();
  if (str.length % 3 !== 0 && !(str.includes(STOPS[0])||str.includes(STOPS[1])||str.includes(STOPS[2]))) errorHandler();

  let lookup = [];
  PROTEINS.forEach(protein => {
    protein[1].forEach(codon => lookup.push([codon, protein[0]]))
  })
  STOPS.forEach(stop => lookup.push([stop, "STOP"]));

  let i = 0;
  let newStr = str;
  do {
    let regex = new RegExp(`^${lookup[i][0]}`);
    if (newStr.match(regex) && lookup[i][1] !== "STOP") {
      proteins.push(lookup[i][1]);
      newStr = newStr.slice(lookup[i][0].length);
      i = 0;
    } else if (newStr.match(regex) && lookup[i][1] === "STOP") {
      return proteins;
    } else {
      i++;
    }
  } while (newStr.length >= 3 && i < lookup.length)

  if (proteins.length === 0) {
    errorHandler()
  } else {
    return proteins
  }
};
