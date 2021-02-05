export const compute = (left, right) => {
  if (left === right) return 0;
  if (left.length === 0) throw new Error('left strand must not be empty');
  if (right.length === 0) throw new Error('right strand must not be empty');
  if (left.length !== right.length) throw new Error('left and right strands must be of equal length');
  
  const leftArr = left.split('');
  const rightArr = right.split('');
  let count = 0;

  for (let i = 0; i < leftArr.length; i++) {
    count = count + (leftArr[i] === rightArr[i] ? 0 : 1);
  }
  return count; 
};
