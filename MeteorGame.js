var config = {
  width: 600,
  height: 300,
  backgroundColor: 0x000000,
  scene: [Meteor],
  pixelArt: true, 
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  dom: {
    createContainer: true
  }
}

var game = new Phaser.Game(config);