//Literal Object
var food = {
    edible: true
}
food.edible = true
var pizza = Object.create(food)//Copies food and adding it to a new object.
pizza.edible = false
console.log(pizza)
console.log(food)



//New Object
var food = new Object()
food.edible = true
var tacos = Object.create(food)





//Constructor Function - Powerfule. Most used way to create objects
//Point is to be cloned and copied. Not ran!!
var Food = function() {
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
    }
}

//This variable is an instance or their master function.
var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)

Food.prototype.calories = 1200



//New Way to write constructor functions in ES6
class Vehicle {
    constructor(make, model) {
        //Not set until you make a cloned copy or instance of it.
        this.make = make
        this.model = model
        this.year
        //Below is a hack.
        this.setYear = this.setYear.bind(this)
    }
    //Anytime you make a this method, you have to do the hack above.
    setYear(year) {
        this.year = year + ' year'
    }

    drive(speed) {
        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle {
    //Constructor is a magical function that is part of classes that runs when you are first making it.
    constructor(model) {
        super('Toyota', model)//Must have (super) if you have a class extending from another. Refers to parent clas you extended
    }
}

var $4Runner = new Toyota('4Runner')
//$4Runner.setYear(2006)
//or
$4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)










//Class Example Test

class Person {
    constructor(occupation, firstName, lastName) {
        //Not set until you make a cloned copy or instance of it.
        this.occupation = occupation
        this.firstName = firstName
        this.lastName = lastName
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, classTeaching) {
        super('Science', firstName, lastName)
        this.classTeaching = classTeaching
    }
}
class Athlete extends Person {
    //constructor(attributes) {
    //this.attributes = attributes
//}
// var player1 = new BaseballPlayer({
//     battingAvg:400
// })
    constructor(firstName, lastName, battingAverage) {
        super('BaseballPlayer', firstName, lastName)
        this.battingAverage = battingAverage
    }
}
//Instances
var baseballPlayer = new Athlete('Steve', 'Rodgers', '400')
baseballPlayer.battingAverage = 400
console.log(baseballPlayer)

var science = new Teacher ('Stacy', 'Stevens', 'Biology')
science.subject = 'Biology'
console.log(science)
