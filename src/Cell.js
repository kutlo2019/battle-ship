export default class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hasShip = false;
    this.isAttacked = false;
    this.shipID = undefined;
  }
}