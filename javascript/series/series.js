export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (this.series === '') throw new Error('series cannot be empty')
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative')
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length');
    
    let arr = this.series.split('').map(x => Number(x));
    let slices = [];
    for (let i = 0; i <= arr.length - sliceLength; i++) {
      slices.push(arr.slice(i, i + sliceLength))
    }
    return slices;
  }
}
