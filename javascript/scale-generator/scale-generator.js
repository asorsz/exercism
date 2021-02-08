export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    this.notes = USESSHARPS.includes(tonic) ? SHARPS : FLATS;
    this.startNote = tonic.charAt(0).toUpperCase() + tonic.slice(1);
    this.startIndex = this.notes.indexOf(this.startNote);
  }

  chromatic() {
    return [...this.notes.slice(this.startIndex), ...this.notes.slice(0,this.startIndex)];
  }

  interval(intervals) {
    let scale = [];
    let i = this.startIndex;

    intervals.split('').forEach(interval => {
      scale.push(this.notes[i]);
      i += STEPS[interval];
      i = i <= 11 ? i : i - 12;
    });
    return scale;
  }
}

export const SHARPS = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export const FLATS = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G'];
export const USESSHARPS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#']
export const STEPS = {m: 1, M: 2, A: 3};
