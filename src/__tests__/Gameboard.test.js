const Gameboard = require("../Gameboard")

describe("Gameboard", () => {
  const gameBoard = new Gameboard();
  describe("ship placement", () => {
    it("can place a ship at the correct location", () => {
      console.log(gameBoard.cells[0][0].hasShip);
      expect(gameBoard.cells[0][0].hasShip).toBe(true);
    });
  });

  describe(".receiveAttack", () => {
    it("takes a pair of coordinates", () => {});
    it("determine wether the attack hit a ship", () => {});
  });

  describe("keeping track of missed attacks", () => {
    it("displays the missed attacks", () => {});
  });

  describe("all ships sunk", () => {
    it("Can report wether or not all their ships have been sunk", () => {

    });
  });
});