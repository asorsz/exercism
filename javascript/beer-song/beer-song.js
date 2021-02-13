export const plural = (num) =>
  num === 1 ? '' : 's';

export const number = (num, caps) =>
  num === 0 ? `${caps ? 'N' : 'n'}o more` : num;

export const pronoun = (num) =>
  num === 0 ? 'it' : 'one';

export const firstLine = (num) =>
  `${number(num, true)} bottle${plural(num)} of beer on the wall, ${number(num, false)} bottle${plural(num)} of beer.`

export const secondLine = (num) =>
  (num === 99
    ? 'Go to the store and buy some more'
    : `Take ${pronoun(num)} down and pass it around`)
  + `, ${number(num, false)} bottle${plural(num)} of beer on the wall.`;

export const recite = (initialBottlesCount, takeDownCount) => {
  let verses = [];
  let num = initialBottlesCount;
  for (let i = takeDownCount; i > 0; i--) {
    verses.push(firstLine(num));
    num === 0 ? num = 99 : num--;
    verses.push(secondLine(num));
    verses.push('');
  }
  verses.pop();
  return verses;
};
