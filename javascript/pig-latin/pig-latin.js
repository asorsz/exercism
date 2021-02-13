export const translateWord = (word) => {
  let newStart = word.search(/[aeio]|(?<!q)u|(?<=\w)y|xr|yt/gi);
  return word.slice(newStart) + word.slice(0, newStart) + 'ay';
};

export class translator {
  static translate(phrase) {
    return phrase.split(' ').map(word => translateWord(word)).join(' ');   
  }
}
