export class BankAccount {
  constructor() {
    this.live = false;
    this.bal = 0;
  }

  open() {
    if (!this.live) {
      this.live = true;
      this.bal = 0;
    } else {
      throw new ValueError;
    }
  }

  close() {
    if (this.live) {
      this.live = false;
    } else {
      throw new ValueError;
    }
  }

  deposit(amt) {
    if (this.live && amt >=0) {
      this.bal += amt;
    } else {
      throw new ValueError;
    }
  }

  withdraw(amt) {
    if (this.live && this.bal >= amt && amt >=0) {
      this.bal -= amt;
    } else {
      throw new ValueError;
    }
  }

  get balance() {
    if (this.live) {
      return this.bal;
    } else {
      throw new ValueError;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
