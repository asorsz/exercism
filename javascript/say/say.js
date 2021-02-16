export class Say {
  inEnglish(num) {
    if (num < 0 || num > 999999999999)
      throw new Error('Number must be between 0 and 999,999,999,999.');
    if (num === 0) return 'zero';
    
    const digitsStr = String(num).padStart(12, '0');
    const digitsArr = digitsStr.match(/\d{3}/g);
    
    let wordsArr = digitsArr
      .map((digits) => this.sayHundreds(Number(digits)))
      .map((words, i) => words === '' ? '' : `${words} ${MAGNITUDES[i]} `);
      
    return wordsArr.join('').trim();   
  }

  sayHundreds(num) {
    if (num === 0) return '';
    if (num < 10) return SINGLES[num];
    if (num < 20) return TEENS[num];

    let digits = String(num).padStart(3, '0').split('');
    digits[0] = digits[0] === '0' ? '' : `${SINGLES[digits[0]]} hundred`;
    digits[1] = digits[1] === '0' ? '' : TENS[digits[1]];
    digits[2] = digits[2] === '0' ? '' : SINGLES[digits[2]];

    digits[0] = digits[0] && (digits[1] || digits[2])
              ? digits[0] + ' '
              : digits[0];
    
    digits[1] = digits[1] && digits[2] ? digits[1] + '-' : digits[1];

    return digits.join('');
  }
}

const SINGLES = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const TEENS = {
  10: 'ten',
  11: 'eleven',
  12: 'twelves',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'ninteen',
};

const TENS = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

const MAGNITUDES = ['billion', 'million', 'thousand', ''];
