const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => {
  it('creates a new instance of Itinerary', () => {
    const itinerary = new Itinerary();
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  // instanciates 2 new port objects - 'lisbon' & 'seville'
  // then a new itinerary object and passes in the new port objects as an array argument
  it('checks has ports', () => {
    const lisbon = new Port('Lisbon');
    const seville = new Port('Seville');

    const itinerary = new Itinerary([lisbon, seville]);
    // we expect a new array that holds the new port objects
    expect(itinerary.ports).toEqual([lisbon, seville]);
  });
});
