module.exports = class Ship {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits < this.length ? false : true;
  }
}