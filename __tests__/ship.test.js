const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  it('creates an instance of Ship', () => {
    const port = new Port('Lisbon');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it('checks has a startingPort property', () => {
    const port = new Port('Lisbon');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
});

describe('setSail', () => {
  it('the ship can set sail', () => {
    const lisbon = new Port('Lisbon');
    const seville = new Port('Seville');
    const itinerary = new Itinerary([lisbon, seville]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(lisbon.ships).not.toContain(ship);
  });
});

describe('dock', () => {
  it('checks that the ship can dock in a new port', () => {
    const lisbon = new Port('Lisbon');
    const seville = new Port('Seville');
    const itinerary = new Itinerary([lisbon, seville]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(seville);
    expect(seville.ships).toContain(ship);
  });
  it('gets added to port on instantiation', () => {
    const lisbon = new Port('Lisbon');
    const itinerary = new Itinerary([lisbon]);
    const ship = new Ship(itinerary);

    expect(lisbon.ships).toContain(ship);
  });
});

describe('throw error', () => {
  it('can\'t sail further than its itinerary', () => {
    const lisbon = new Port('Lisbon');
    const seville = new Port('Seville');
    const itinerary = new Itinerary([lisbon, seville]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
