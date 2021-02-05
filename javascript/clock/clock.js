export class Clock {
  constructor(hrs = 0, mins = 0) {
    this.hrs = (((hrs + Math.floor(mins/60)) % 24) + 24) % 24;
    this.mins = ((mins % 60) + 60) % 60;
  }

  toString() {
    let hrsStr = this.hrs < 10 ? '0' + this.hrs : this.hrs.toString();
    let minsStr = this.mins < 10 ? '0' + this.mins : this.mins.toString();
    return `${hrsStr}:${minsStr}`
  }

  plus(mins) {
    this.hrs = (((this.hrs + Math.floor((this.mins + mins)/60)) % 24) + 24) % 24;
    this.mins = (((this.mins + mins) % 60) + 60) % 60;
    return this;
  }

  minus(mins) {
    this.hrs = (((this.hrs + Math.floor((this.mins - mins)/60)) % 24) + 24) % 24;
    this.mins = (((this.mins - mins) % 60) + 60) % 60;
    return this;
  }

  equals(clock) {
    return this.hrs === clock.hrs && this.mins === clock.mins;
  }
}
