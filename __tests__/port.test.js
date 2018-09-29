const Port = require('../src/port');


describe('Port', () => {
  describe('with ships and itinerary', () => {
    let lisbon;
    let mockTitanic;
    let mockMaryRose;
    beforeEach(() => {
      lisbon = new Port('Lisbon');
      mockTitanic = jest.fn();
      mockMaryRose = jest.fn();
    });
    it('creates an instance of port', () => {
      expect(lisbon).toBeInstanceOf(Object);
    });
    it('checks has a name property', () => {
      expect(lisbon.name).toEqual('Lisbon');
    });
    it('can add a ship', () => {
      lisbon.addShip(mockMaryRose);
      expect(lisbon.ships).toContain(mockMaryRose);
    });
    it('can remove a ship', () => {
      lisbon.addShip(mockTitanic);
      lisbon.addShip(mockMaryRose);
      lisbon.removeShip(mockMaryRose);

      expect(lisbon.ships).toEqual([mockTitanic]);
    });
  });
});
