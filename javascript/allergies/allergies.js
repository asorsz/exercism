export class Allergies {
  constructor(num) {
    let code = num.toString(2).split('').reverse();
    ALLERGENS.forEach((allergen, i) => {
      this[allergen] = code[i] === '1';
    });
  }

  list() {
    let allergies = [];
    for (let key in this) {
      if (this[key]) allergies.push(key);
    }
    return allergies;
  }

  allergicTo(allergen) {
    return this[allergen];
  }
}

export const ALLERGENS = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
]
