$(document).ready(function() {
    $("button").sparkle();
})
// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
        super()
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name
        this.id = id
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

//Instance #1
var movie1 = new Trailer('Pirates of the Caribbean: Dead Men Tell No Tales', '6i77T6KzYxM')

//Instance #2
var movie2 = new Trailer('Power Rangers', '6CKtFztnJ9M')

//Instance #3
var movie3 = new Trailer('Collateral Beauty', 'JxaeSw7_i2c')

//Instance #4
var movie4 = new Trailer('THOR 3: Ragnarok - Vacation', 'fVnBBjjjAnY')
