const Ship = require('../src/ship');

let ship = null;

beforeEach(() => {
  ship = new Ship('Lisbon');
});

describe('Ship', () => {
  it('creates an instance of Ship', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('initiates a startingPort property', () => {
    expect(ship.startingPort).toEqual('Lisbon');
  });
});

describe('setSail', () => {
  it('returns a boolean when the ship has set sail', () => {
    ship.setSail();
    expect(ship.startingPort).toEqual(false);
  });
});
