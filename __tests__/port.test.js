const Port = require('../src/port');

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
});
