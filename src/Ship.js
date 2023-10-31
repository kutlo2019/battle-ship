export default class Ship {
  constructor(x, y, length, ID) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.hits = 0;
    this.shipID = ID;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits < this.length ? false : true;
  }
}