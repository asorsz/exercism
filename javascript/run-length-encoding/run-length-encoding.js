export const encode = str => {
  const arr = str.split('')
  let newArr = [];
  let count = 1;
  let prev = arr[0]
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== prev) {
      let chr = count === 1 ? prev : count + prev;
      newArr.push(chr);
      count = 1;
      prev = arr[i]        
    } else {
      count ++
      prev = arr[i]
    }
  }
  
  let chr = count === 1 ? prev : count + prev;
  newArr.push(chr);
  
  return newArr.join('')
};

export const decode = str => {
  if (!str) return '';
  
  const regexp = /\d*[a-zA-Z ]/g;
  const arr = str.match(regexp);
  const newArr = arr.map(code => {
    if (code.length === 1) {
      return [code, 1]
    } else {
      let letter = code.substr(-1, 1);
      let num = parseInt(code.substr(0, code.length - 1));
      return [letter, num]
    }
  });
  
  let newStr = '';
  newArr.forEach(chr => {
    for (let i = chr[1]; i > 0; i--) {
    newStr = newStr + chr[0];
    }
  });

  return newStr;
};
