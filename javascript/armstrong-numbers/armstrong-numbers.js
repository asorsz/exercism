export const isArmstrongNumber = num => {
  const array = num.toString().split('');
  const power = array.length;
  const sum = array.reduce((total, digit) => total + Math.pow(parseInt(digit), power), 0);
  return num === sum;
};
