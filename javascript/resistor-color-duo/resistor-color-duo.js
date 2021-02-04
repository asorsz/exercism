export const decodedValue = (input) => 
  input.slice(0, 2)
    .map((color) => COLORS.indexOf(color))
    .reduce((sum, n) => sum * 10 + n );

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
