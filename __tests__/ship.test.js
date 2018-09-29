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
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      lisbon = {
        ...port,
        name: 'Lisbon',
        ships: [],
      };
      seville = {
        ...port,
        name: 'Seville',
        ships: [],
      };
      itinerary = {
        ports: [lisbon, seville],
      };
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
      expect(lisbon.removeShip).toHaveBeenCalledWith(maryRose);
    });

    it('ship can dock in a different port', () => {
      maryRose.setSail();
      maryRose.dock();

      expect(maryRose.currentPort).toEqual(seville);
      expect(seville.addShip).toHaveBeenCalledWith(maryRose);
    });

    it('gets added to port on instantiation', () => {
      expect(lisbon.addShip).toHaveBeenCalledWith(maryRose);
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
