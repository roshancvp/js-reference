/* Part 1 */

/*
 * Anonymous Function (Function Expression)
 * - Not stored in memory
 * - Runs only when this line is reached
 */
var greeting = function () {
  console.log("Hello, World!");
};

message(greeting); //Hello, World!

/*
 * Declared function
 */
function message(message) {
  message();
}

/* Part 2 */

var numbers = [12, 34, 65, 67, 86, 75];

var results = numbers.map(function(element) { return element * 2; });

console.log("numbers: " + numbers); //numbers: 12,34,65,67,86,75
console.log("results: " + results); //results: 24,68,130,134,172,150
