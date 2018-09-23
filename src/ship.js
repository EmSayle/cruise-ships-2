function Ship(currentPort) {
  this.currentPort = currentPort;
  this.previousPort = null;
}

// create a setSail function so that the ship is no longer at currentPort
Ship.prototype.setSail = function setSail() {
  this.previousPort = this.currentPort;
  // after setSail is called the previousPort is now set to currentPort(where we just left)
};

// create dock function so that the ship can dock into a new port
// pass in the dock object as the argument
Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};


module.exports = Ship;
