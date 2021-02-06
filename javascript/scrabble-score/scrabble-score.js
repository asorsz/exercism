export const score = (str) => {
  let score = 0;
  for (let l of str.toUpperCase()) {
    for (let p in POINTS) {
      if (POINTS[p].includes(l)) {
        score += parseInt(p);
      }
    }
  }
  return score;
};

export const POINTS = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
