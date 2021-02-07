export const parse = (str) => str
  .match(/([A-Za-z'])+/g)
  .map(x => x[0].toUpperCase())
  .join('');
