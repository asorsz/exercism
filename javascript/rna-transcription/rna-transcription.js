export const toRna = (dna) => dna.split('')
  .map(n => DNAtoRNA[n])
  .join('');

export const DNAtoRNA = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U',
}
