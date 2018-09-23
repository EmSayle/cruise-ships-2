function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

module.exports = Port;
