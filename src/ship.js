function Ship(currentPort) {
  this.currentPort = currentPort;
}

// create a setSail function so that the ship is no longer at currentPort
Ship.prototype.setSail = function setSail() {
  return this.currentPort = false;
};

// create dock function so that the ship can dock into a new port
// pass in the dock object as the argument
Ship.prototype.dock = function dock(port) {
  return this.currentPort = port;
};


module.exports = Ship;
