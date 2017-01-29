/* Part 1 */
console.log("Part 1\n");

var myBox = {
  height: 6,
  width: 8,
  length: 10,
  volume: 480,
  material: "cardboard",
  contents: ["Book1", "Book2", "Book3"],
  numBooks: 0
};

// Modify Object
myBox.width = 12;
myBox.volume = myBox.width * myBox.height * myBox.length;
console.log(myBox);

// Add Properties
myBox.weight = 24;
console.log(myBox);

// Using []
// Converts to string if the property has spaces
myBox["city1"] = "San Francisco";
myBox["city2"] = "San Luis Obsipo";
myBox["city Nums"] = 2;

function printCities() {
  for (var i = 0; i < myBox["city Nums"]; i++) {
    console.log(myBox["city" + (i + 1)]);
  }
}

console.log(myBox);
printCities();

//delete - deletes proprty from object (return true)
delete myBox.contents;

//Add Books
function addBook(box, name, writer) {
  box.numBooks++;
  box["book" + box.numBooks] = {title: name, author: writer};
}

addBook(myBox,"Great Expectations", "Charles Dickens");
console.log(myBox);


/* Part 2 */
console.log("\nPart 2\n");

var aquarium = {
  Nemo: { type: "fish", species: "clownfish", length: 3.7},
  Dory: { type: "fish", species: "blue tang", length: 6.2},
  addCritter: function (name, type, species, length) {
    this[name] = {type: type, species: species, length: length};
  }
}
console.log(aquarium);

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);
console.log(aquarium);

// Add function on the fly
aquarium.takeOut = function (name) {
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp;
}

var fishOut = aquarium.takeOut("Dory");
console.log(fishOut);

/* Part 3 - Enumaration */
console.log("\nPart 3\n")

aquarium.countFish = function() {
  var numFish = 0;
  for (key in this) {
    if (this[key].type != "fish") {
      numFish++;
    }
  }
  return numFish;
}


console.log(aquarium);
console.log(aquarium.countFish());
