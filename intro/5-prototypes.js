var greet = "Hello, World!"

String.prototype.countAll = function (letter) {
  var letterCount = 0;
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
      letterCount++;
    }
  }
  return letterCount;
};

console.log(greet.countAll("l")); // 3

/* Part 2 */
var shoe = {
  size: 6,
  gender: "women",
  construction: "slipper"
};

console.log(shoe);

// The first argument of the Object.create method will
// be used as the prototype of the newly created Object
var magicShoe = Object.create(shoe);

magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

console.log(magicShoe);

console.log(Object.prototype.isPrototypeOf(shoe)); // true
console.log(shoe.isPrototypeOf(magicShoe)); // true
console.log(magicShoe.isPrototypeOf(shoe)); // false

/* Part 2 - Classes*/

// A class is a set of objects that all share and inherit fromt the same prototype

// Constructor
function Shoe (shoeSize, ShoeColor, forGender, constructStyle) {
  this.size = shoeSize;
  this.color = ShoeColor;
  this.gender = forGender;
  this.construction = constructStyle;
}

Shoe.prototype = {
  putOn: function () { console.log("Your " + this.construction + " is on!") },
  takeOff: function () { console.log("Shoe's off!") }
}

var beachShoe = new Shoe( 10, "blue", "women", "flipflop");
console.log(beachShoe);
beachShoe.putOn();

console.log(beachShoe.hasOwnProperty("construction")); //true

/* Part 3 */
console.log("\nPart 3\n");

var x = 4;
var y = "4";

console.log(x == y); //true
console.log(x === y); //false

var Tornado = function(category, affectedAreas, windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
}

var cities = [['San Francisco', 1234], ['San Luis Obispo', 5678], ['Los Angleles', 9012]];
var twister = new Tornado('F5', cities, 220);

console.log(twister.valueOf());

Tornado.prototype.valueOf = function () {
  var sum = 0;
  for (var i = 0; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1];
  }
  return sum;
}

Tornado.prototype.toString = function() {
  //do stuff and return string
}

console.log(twister.valueOf());
console.log();

console.log(twister.constructor.prototype);


//TODO
