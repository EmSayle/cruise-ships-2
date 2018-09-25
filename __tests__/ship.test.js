const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let maryRose;
    let lisbon;
    let seville;
    let itinerary;

    beforeEach(() => {
      lisbon = new Port('Lisbon');
      seville = new Port('Seville');
      itinerary = new Itinerary([lisbon, seville]);
      maryRose = new Ship(itinerary);
    });

    it('creates an instance of Ship', () => {
      expect(maryRose).toBeInstanceOf(Object);
    });

    it('checks has a startingPort property', () => {
      expect(maryRose.currentPort).toBe(lisbon);
    });

    it('the ship can set sail', () => {
      maryRose.setSail();

      expect(maryRose.currentPort).toBeFalsy();
      expect(lisbon.ships).not.toContain(maryRose);
    });

    it('checks that the ship can dock in a new port', () => {
      maryRose.setSail();
      maryRose.dock();

      expect(maryRose.currentPort).toEqual(seville);
      expect(seville.ships).toContain(maryRose);
    });

    it('gets added to port on instantiation', () => {
      expect(lisbon.ships).toContain(maryRose);
    });
  });

  describe('throw error', () => {
    it('can\'t sail further than its itinerary', () => {
      const lisbon = new Port('Lisbon');
      const seville = new Port('Seville');
      const itinerary = new Itinerary([lisbon, seville]);
      const maryRose = new Ship(itinerary);

      maryRose.setSail();
      maryRose.dock();

      expect(() => maryRose.setSail()).toThrowError('End of itinerary reached');
    });
  });
});
