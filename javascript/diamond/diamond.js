export const rows = (char) => {
  const charIndex = ALPHABET.indexOf(char);
  const diamondSize = ((charIndex + 1) * 2) - 1;
  let diamond = [...Array(diamondSize)].map((_) => Array(diamondSize).fill(' '));

  for (let i = 0; i < diamondSize; i++) {
    let letterIndex = i <= charIndex ? i : (2 * charIndex) - i;
    let letter = ALPHABET.charAt(letterIndex);
    let pos1 = charIndex - letterIndex;
    let pos2 = charIndex + letterIndex;

    diamond[i][pos1] = letter;
    diamond[i][pos2] = letter;
  }

  return diamond.map((el) => el.join(''));
};

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
