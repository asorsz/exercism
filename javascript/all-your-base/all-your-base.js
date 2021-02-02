export const convert = (arr, from, to) => {
  const wrongInputFormat = () => { throw new Error('Input has wrong format') };
  const wrongInputBase = () => { throw new Error('Wrong input base') };
  const wrongOutputBase = () => { throw new Error('Wrong output base') };

  if (arr.length === 1 && arr[0] === 0) return [0];
  
  if (from < 2) wrongInputBase();
  if (to < 2) wrongOutputBase();
  
  if (arr.length === 0) wrongInputFormat();
  if (arr[0] === 0) wrongInputFormat();
  if (arr.reduce((tot, num) => tot + num) === 0) wrongInputFormat();
  if (!arr.every(x => x >= 0)) wrongInputFormat();
  if (!arr.every(x => x < from)) wrongInputFormat();

  let newArr = [];
  let rem = toBaseTen(arr);
  let powers = findPower(rem);

  for (let i = powers; i >= 1; i--) {
    newArr.push(Math.floor(rem / Math.pow(to, i)));
    rem = rem % Math.pow(to, i)
  }
  newArr.push(rem)
  return newArr;

  function findPower(num) {
    let i = 0
    while (num >= Math.pow(to, i)) {
      i++;
    }
    return i-1;
  }

  function toBaseTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * Math.pow(from, arr.length - 1- i))
    }
    return newArr.reduce((tot, x) => tot + x);
  }    
};
