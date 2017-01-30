/* Part 1 */

function testClosure() {
  var x = 4;
  function closeX() {
    return x;
  }

  return closeX;
}

var checkLocalX = testClosure();
console.log(checkLocalX()); //4


/* Closures Help in Function "Construction Zones" */

function buildTicket(transport) {
  var passengerNumber = 0;

  return function (name) {
    passengerNumber++;
    console.log("Transport Method: " + transport);
    console.log("            Name: " + name);
    console.log("Passenger Number: " + passengerNumber);
  }
}

var getSubmarineTicket = buildTicket("Submarine");
var getBattleshipTicket = buildTicket("Battleship");
var getSeagullTicket = buildTicket("Giant Seagull");

console.log(getSubmarineTicket("Mario"));
console.log(getSubmarineTicket("Toad"));
console.log(getBattleshipTicket("Luigi"));
console.log(getSeagullTicket("Bowser"));

/* Part 2 */
