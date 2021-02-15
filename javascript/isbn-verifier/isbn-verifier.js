export const isValid = (ISBN) => {
  if (ISBN === '') return false;
  if (ISBN.match(/[^\d-X]/g)) return false;

  let ISBNArray = ISBN.match(/[\dX]/g);
  if (ISBNArray.length !== 10) return false;
  if (ISBNArray[9] === 'X') ISBNArray[9] = 10;
  if (ISBNArray.some((x) => x === 'X')) return false;

  return ISBNArray.reduce((sum, x, i) => 
    sum + (Number(x) * (10 - i))
  , 0) % 11 === 0;
};
