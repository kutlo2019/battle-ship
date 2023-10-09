const Ship = require("../Ship");

describe('Ship', () => {
  const ship = new Ship(0, 0, 1);

  describe('.hit', () => {
    it("defines a function", () => {
      expect(typeof ship.hit).toBe("function");
    });

    it('increases the number of hits', () => {
      expect(ship.hits).toBe(0);
      expect(ship.isSunk()).toBe(false);
      ship.hit()
      expect(ship.hits).toBe(1);
      ship.hit();
      expect(ship.hits).toBe(2);
    });
  });

  describe(".isSunk", () => {
    it("defines a function", () => {
      expect(typeof ship.isSunk).toBe("function");
    });

    it("returns false", () => {
      // reset the hits from 2
      ship.hits = 0; 
      expect(ship.isSunk()).toBe(false);
    });

    it("returns true", () => {
      expect(ship.isSunk()).toBe(false);
      expect(ship.hit()).toBeUndefined();
      expect(ship.hits).toBe(1);
      expect(ship.isSunk()).toBe(true);
    })
  });

});