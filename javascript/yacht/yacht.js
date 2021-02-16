export const score = (dice, category) => {
  return CATEGORIES[category](dice);
};

export const CATEGORIES = {
  'ones': (dice) => sums(dice, 1),
  'twos': (dice) => sums(dice, 2),
  'threes':(dice) => sums(dice, 3),
  'fours': (dice) => sums(dice, 4),
  'fives': (dice) => sums(dice, 5),
  'sixes': (dice) => sums(dice, 6),
  'full house': (dice) => fullHouse(dice),
  'four of a kind': (dice) => fourOfAKind(dice),
  'little straight': (dice) => dice
    .sort((a, b) => b - a)
    .map((die, i) => die + i)
    .every((die) => die === 5)? 30 : 0,
  'big straight': (dice) => dice
    .sort((a, b) => b - a)
    .map((die, i) => die + i)
    .every((die) => die === 6)? 30 : 0,
  'choice': (dice) => dice.reduce((sum, die) => sum + die, 0),
  'yacht': (dice) => dice.every((x) => x === dice[0]) ? 50 : 0,
};

export const sums = (dice, x) =>
  dice.reduce((sum, die) => sum + (die === x ? die : 0), 0);

export const fullHouse = (dice) => {
  const sorted = dice.sort((a, b) => a - b);
  if ((sorted[0] !== sorted[4])
    && ((sorted[0] === sorted[1]) && (sorted[3] === sorted[4]))
    && ((sorted[2] === sorted[1]) || (sorted[2] === sorted[3]))
  ) {
    return dice.reduce((sum, die) => sum + die, 0);
  } else {
    return 0;
  }
};

export const fourOfAKind = (dice) => {
  const sorted = dice.sort((a, b) => a - b);
  if (sorted[0] === sorted[3]) return 4 * sorted[0];
  if (sorted[1] === sorted[4]) return 4 * sorted[1];
  return 0;
};
