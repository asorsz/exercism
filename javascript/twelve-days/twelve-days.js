export const recite = (start, end) => {
  let song = '';
  let last = end || start;
  for (let i = start; i <= last; i++) {
    song += getVerse(i)
    song += i !== last ? '\n' : '';
  }  
  return song;
};

export const getVerse = (verseNum) => {
  let verse = `On the ${ORDINALS[verseNum]} day of Christmas my true love gave to me: `
  for (let i = verseNum; i > 0; i--) {
    verse += GIFTS[i];
    if (i === 1) {
      verse += '.\n';
    } else if (i === 2) {
      verse += ', and ';
    } else {
      verse += ', '
    }
  }
  return verse;
};

export const ORDINALS = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  5: 'fifth',
  6: 'sixth',
  7: 'seventh',
  8: 'eighth',
  9: 'ninth',
  10: 'tenth',
  11: 'eleventh',
  12: 'twelfth'
};

export const GIFTS = {
  1: 'a Partridge in a Pear Tree',
  2: 'two Turtle Doves',
  3: 'three French Hens',
  4: 'four Calling Birds',
  5: 'five Gold Rings',
  6: 'six Geese-a-Laying',
  7: 'seven Swans-a-Swimming',
  8: 'eight Maids-a-Milking',
  9: 'nine Ladies Dancing',
  10: 'ten Lords-a-Leaping',
  11: 'eleven Pipers Piping',
  12: 'twelve Drummers Drumming'
};
