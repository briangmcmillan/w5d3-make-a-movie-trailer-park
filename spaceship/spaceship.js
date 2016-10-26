// Object Literal
var spaceship1 = {
    // topSpeed: '2lyph',
    //shipName: 'Galaxy Cruiser',
    launch: function(shipName, shipSpeed) {
        console.log(shipName + ' launching to infinity and beyond at ' + shipSpeed + ' lyph!')
    }
}
// Call the launch method by
spaceship1.launch('Galaxy Cruiser', 2)
//Clone the your spaceship1 variable and create a new one with a different speed and name.
var spaceshipnew = Object.create(spaceship1)
//Run the launch function for the newly created variable.
spaceshipnew.launch('Galaxy Bruiser', 100)


// Object New
var spaceship2 = new Object()
// spaceship2.topSpeed = '10lyph'
// spaceship2.shipName = 'Galaxy Blaster'
spaceship2.launch = function(shipName, topSpeed) {
    console.log(shipName + ' launching to infinity and beyond at ' + topSpeed + ' lyph!')
}

// Call the drive method with a speed argument value of 35
spaceship2.launch('Galaxy Blaster', 1000)
//Clone the your spaceship1 variable and create a new one with a different speed and name.
var spaceshipnewer = Object.create(spaceship2)
//Run the launch function for the newly created variable.
spaceshipnewer.launch('Galaxy Faster', 100)


// Constructor Function
var Spaceship3 = function() {
    // this.topSpeed = '20lyph'
    // this.shipName = 'Galaxy Toaster'
    this.launch = function(shipName, speed) {
        console.log(shipName + ' launching to infinity and beyond at ' + speed + ' lyph!')
        setTimeout(function() {
            console.log(shipName + ' has safely landed')
        }, 3000)
    }
}

var ship = new Spaceship3()

// Call the drive method with a speed argument value of 85
ship.launch('Galaxy Toaster', 5)

Spaceship3.prototype.hasMissles = true


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

var shipnewest = new Spaceship4()

// Call the drive method with a speed argument value of 55
shipnewest.launch()
