import Ship from "./Ship";
import Cell from "./Cell";

module.exports = class Gameboard {
  cells = [];

  constructor() {
    this.createCells();
    this.placeShips();
  }

  createCells() {
    for (let i = 0; i < 10; i++) {   
      let tempArray = [];
      for (let j = 0; j < 10; j++) {
        const cell = new Cell(i, j)
        tempArray.push(cell);
      }
      this.cells.push(tempArray);
    }
  }

  placeShips() {
    this._placeShip(0, 0, 2);
    this._placeShip(3, 4, 3);
    this._placeShip(8, 4, 5);
    this._placeShip(6, 1, 4);
    this._placeShip(5, 7, 1);
  }

  _placeShip(x, y, length) {
    const ship = new Ship(x, y, length);
    for (let i = y; i < (ship.length + y); i++) {
      this.cells[x][i].hasShip = true;
    }
  }
  receiveAttack() {

  }
}