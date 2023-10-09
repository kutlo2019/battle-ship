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
    const ship1 = new Ship(0, 0, 2);
    for (let i = 0; i < (ship1.length + i); i++) {
      console.log(`cell[0][${i}]`, this.cells[0][i]);
      // this.cells[0][i].hasShip = true;
    }

    const ship2 = new Ship(3, 4, 3);
    for (let i = 4; i < (ship2.length + i); i++) {
      this.cells[3][i].hasShip = true;
    }
  }
  receiveAttack() {

  }
}