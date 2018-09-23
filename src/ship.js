function Ship(startingPort) {
  this.startingPort = startingPort;
}

module.exports = Ship;

Ship.prototype.setSail = function setSail() {
  return this.startingPort = false;
};
