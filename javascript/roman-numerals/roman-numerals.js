export const toRoman = (num) => {
  let str = num.toString();
  let arr = [];

  let i = 1
  do {
    arr.unshift(numerals[i-1][str.substr(-i,1)]);
    i++
  } while (i <=3 && i <= str.length)

  arr.unshift(numerals[3][0].repeat(Math.floor(num/1000)));
  
  return arr.join('');
}

export const numerals = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M"]
];

