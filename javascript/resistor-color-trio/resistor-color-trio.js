export class ResistorColorTrio {
  constructor(arr) {
    this.bands = arr;
  }

  get label() {
    if (this.bands.some(elem => COLORS.indexOf(elem) === -1))
      throw new Error('invalid color');

    const value = this.bands
      .slice(0, 2)
      .map((color) => COLORS.indexOf(color))
      .reduce((sum, n) => sum * 10 + n )
      * (10 ** COLORS.indexOf(this.bands[2]));
    
    const [value2, units] = value < 1000
                            ? [value, 'ohms']
                            : [value/1000, 'kiloohms'];

    return `Resistor value: ${value2} ${units}`;
  }
}

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
