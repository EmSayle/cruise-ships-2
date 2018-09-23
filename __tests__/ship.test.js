const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

// let ship = null;
// let port = null;

// beforeEach(() => {
//   port = new Port(ship);
//   ship = new Ship(port);
// });

describe('Ship', () => {
  it('creates an instance of Ship', () => {
    const ship = new Ship('Lisbon');
    expect(new Ship()).toBeInstanceOf(Object);
  });
  // in set up create a new instance of port and set it to a port name 'Lisbon'
  // then create a new ship and pass in the new port object giving it the currentPort 'Lisbon'
  it('checks has a startingPort property', () => {
    const port = new Port('Lisbon');
    const ship = new Ship(port);
    expect(ship.currentPort).toEqual(port);
    // current port is now set to 'Lisbon'
  });
});

// in set up create a new instance of port and set it to a port name 'Lisbon'
// then create a new ship and pass in the new port object giving it the currentPort 'Lisbon'
// call setSail function so that the ship's current port is no longer 'Lisbon'
describe('setSail', () => {
  it('returns a boolean when the ship has set sail', () => {
    const port = new Port('Lisbon');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
    // updated to expect that a previousPort is now set to the port it just left
  });
});

// set up - created new instance of port - 'Lisbon' port
// created new instance of ship and passed in above
// the created another new instance of port - 'Seville'
// called ship.dock and passed in seville
describe('dock', () => {
  it('checks tha the ship can dock in a new port', () => {
    const lisbon = new Port('Lisbon');
    const ship = new Ship(lisbon);
    const seville = new Port('Seville');
    ship.dock(seville);
    expect(ship.currentPort).toEqual(seville);
  });
});
