import Ship from "./Ship.js";
import Cell from "./Cell.js";

export default class Gameboard {
  cells = [];
  ships = [];

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
    this._placeShip(0, 0, 2, 1);
    this._placeShip(3, 4, 3, 2);
    this._placeShip(8, 4, 5, 3);
    this._placeShip(6, 1, 4, 4);
    this._placeShip(5, 7, 1, 5);
  }

  _placeShip(x, y, length, ID) {
    const ship = new Ship(x, y, length, ID);
    this.ships.push(ship);
    for (let i = y; i < (ship.length + y); i++) {
      this.cells[x][i].hasShip = true;
      this.cells[x][i].shipID = ID; 
    }
  }
  receiveAttack(x, y) {
    this.cells[x][y].isAttacked = true;
    let index = this.ships.findIndex(ship => ship.shipID === this.cells[x][y].shipID);
    if (index !== -1) {
      this.ships[index].hit();
      this.ships[index].isSunk();
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}