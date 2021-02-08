export const isPaired = (str) => {
  let arr = str.match(/[()[\]{}]/g);
  if (!arr) return true;

  let stack = [];
  arr.forEach(e => {
    if (e === BRACKETS[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(e)
    }
  });
  
  return stack.length === 0;
};

export const BRACKETS = {
  '(': ')',
  '[': ']',
  '{': '}'
};
