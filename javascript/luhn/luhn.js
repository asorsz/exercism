export const valid = (str) => 
  str.match(/\d/g).length > 1 &&
  !(str.match(/[^\d\s]/g)) &&
  str.match(/\d/g)
    .reverse()
    .map(Number)
    .map((x, i) => {
      if (i % 2 !== 0) {
        return x > 4 ? x * 2 - 9 : x * 2;
      } else {
        return x;
      }
    })
    .reduce((sum, x) => sum + x)
  % 10 === 0;

