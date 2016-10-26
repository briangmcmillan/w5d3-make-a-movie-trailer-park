// Object Literal
var spaceship1 = {
    // topSpeed: '2lyph',
    shipName: 'Galaxy Cruiser',
    launch: function(speed) {
        console.log(this.shipName + ' launching to infinity and beyond at ' + speed + 'lyph !')
    }
}
// Call the launch method by
spaceship1.launch(2)


// Object New
var spaceship2 = new Object()
spaceship2.topSpeed = '10lyph'
spaceship2.shipName = 'Galaxy Blaster'
spaceship2.launch = function(speed) {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
}

// Call the drive method with a speed argument value of 35
spaceship2.launch()


// Constructor Function
var Spaceship3 = function() {
    this.topSpeed = '20lyph'
    this.shipName = 'Galaxy Toaster'
    this.launch = function(speed) {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var ship = new Spaceship3()

// Call the drive method with a speed argument value of 85
ship.launch()


// Class
class Spaceship4 {
    constructor() {
        this.topSpeed = '50lyph'
        this.shipName = 'Galaxy Roaster'
    }

    launch(speed) {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var ship = new Spaceship4()

// Call the drive method with a speed argument value of 55
ship.launch()
