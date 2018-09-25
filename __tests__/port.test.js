const Port = require('../src/port');
const Ship = require('../src/ship');

let port = null;

beforeEach(() => {
  port = new Port('Lisbon');
});

describe('Port', () => {
  it('creates an instance of port', () => {
    expect(port).toBeInstanceOf(Object);
  });
  it('checks has a name property', () => {
    expect(port.name).toEqual('Lisbon');
  });
  it('can add a ship', () => {
    // const port = new Port('Lisbon');
    const ship = {};

    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it('can remove a ship', () => {
    const titanic = {};
    const maryRose = {};

    port.addShip(titanic);
    port.addShip(maryRose);
    port.removeShip(maryRose);

    expect(port.ships).toEqual([titanic]);
  });
});
