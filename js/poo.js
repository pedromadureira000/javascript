//------/ use class syntax to define a constructor function
//without class syntax
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle("Jupiter")
console.log(zeus.targetPlanet)

//with class syntax
class SpaceShuttle2 {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle2("Jupiter");
console.log(zeus.targetPlanet)

//-----/ getter and setter
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
