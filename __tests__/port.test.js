const Port = require('../src/port');
// const Ship = require('../src/ship');

describe('Port', () => {
  describe('with ships and itinerary', () => {
    let lisbon;
    let titanic;
    let maryRose;
    beforeEach(() => {
      lisbon = new Port('Lisbon');
      titanic = {};
      maryRose = {};
    });
    it('creates an instance of port', () => {
      expect(lisbon).toBeInstanceOf(Object);
    });
    it('checks has a name property', () => {
      expect(lisbon.name).toEqual('Lisbon');
    });
    it('can add a ship', () => {
      lisbon.addShip(maryRose);
      expect(lisbon.ships).toContain(maryRose);
    });
    it('can remove a ship', () => {
      lisbon.addShip(titanic);
      lisbon.addShip(maryRose);
      lisbon.removeShip(maryRose);

      expect(lisbon.ships).toEqual([titanic]);
    });
  });
});
