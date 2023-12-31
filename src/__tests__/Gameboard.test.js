const Gameboard = require("../Gameboard");
const Ship = require("../Ship");

describe("Gameboard", () => {
  const gameBoard = new Gameboard();
  describe("ship placement", () => {
    it("can place ship 1 at the correct location", () => {
      expect(gameBoard.cells[0][0].hasShip).toBeTruthy(); // ship here
      expect(gameBoard.cells[0][1].hasShip).toBeTruthy(); // ship here
      expect(gameBoard.cells[0][2].hasShip).toBeFalsy(); // no ship here
    });

    it("can place ship 2 at the correct location", () => {
      expect(gameBoard.cells[3][3].hasShip).toBeFalsy();
      expect(gameBoard.cells[3][4].hasShip).toBeTruthy();
      expect(gameBoard.cells[3][5].hasShip).toBeTruthy();
      expect(gameBoard.cells[3][6].hasShip).toBeTruthy();
      expect(gameBoard.cells[3][7].hasShip).toBeFalsy();
    });

    it("can place ship 3 at the correct location", () => {
      expect(gameBoard.cells[8][3].hasShip).toBeFalsy();
      expect(gameBoard.cells[8][4].hasShip).toBeTruthy();
      expect(gameBoard.cells[8][5].hasShip).toBeTruthy();
      expect(gameBoard.cells[8][6].hasShip).toBeTruthy();
      expect(gameBoard.cells[8][7].hasShip).toBeTruthy();
      expect(gameBoard.cells[8][8].hasShip).toBeTruthy();
      expect(gameBoard.cells[8][9].hasShip).toBeFalsy();
    });

    it("can place ship 4 at the correct location", () => {
      expect(gameBoard.cells[6][0].hasShip).toBeFalsy();
      expect(gameBoard.cells[6][1].hasShip).toBeTruthy();
      expect(gameBoard.cells[6][2].hasShip).toBeTruthy();
      expect(gameBoard.cells[6][3].hasShip).toBeTruthy();
      expect(gameBoard.cells[6][4].hasShip).toBeTruthy();
      expect(gameBoard.cells[6][5].hasShip).toBeFalsy();
    });

    it("can place ship 5 at the correct location", () => {
      expect(gameBoard.cells[5][6].hasShip).toBeFalsy();
      expect(gameBoard.cells[5][7].hasShip).toBeTruthy();
      expect(gameBoard.cells[5][8].hasShip).toBeFalsy();
    });
  });

  describe(".receiveAttack", () => {
    it("analyses attack at (x=3, y=5), expects ship2 to be hit", () => {
      expect(gameBoard.ships[1].hits).toBe(0);
      expect(gameBoard.cells[3][5].isAttacked).toBeFalsy();
      gameBoard.receiveAttack(3, 5);
      expect(gameBoard.cells[3][5].isAttacked).toBeTruthy();
      expect(gameBoard.ships[1].hits).toBe(1);
    });

    it("determine wether missed attack (4, 2) is registered", () => {
      expect(gameBoard.cells[4][2].isAttacked).toBeFalsy();
      gameBoard.receiveAttack(4, 2);
      expect(gameBoard.cells[4][2].isAttacked).toBeTruthy();
    });
    
    it("Can report wether or not all their ships have been sunk", () => {
      expect(gameBoard.allSunk()).toBeFalsy();
      gameBoard.cells.forEach(row => {
        row.forEach(cell => {
          gameBoard.receiveAttack(cell.x, cell.y);
        })
      });
      expect(gameBoard.allSunk()).toBeTruthy();
    });
  });
});