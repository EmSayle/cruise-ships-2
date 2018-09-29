const Itinerary = require('../src/itinerary');


describe('Itinerary', () => {
  it('creates a new instance of Itinerary', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });


  it('checks has ports', () => {
    const mockLisbon = jest.fn(); // created mock port objects
    const mockSeville = jest.fn();

    const itinerary = new Itinerary([mockLisbon, mockSeville]);

    expect(itinerary.ports).toEqual([mockLisbon, mockSeville]);
  });
});
