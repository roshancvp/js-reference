var isArthur = false;
var isKing = false;
var sword;
var weapon;
var helemt;

if(isArthur) {
  sword = "Excalibur";
} else {
  sword = "Longsword";
}

/* someCondition ? pickThisIfTrue :pickThisIfFalse */

sword = isArthur ? "Excalibur" : "Longsword"

//+ has higher presendence than ?
console.log("Current Weapon: " + isArthur ? "Excalibur" : "Longsword") //Excalibur

console.log("Current Weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword")); //Longsword

//Can execute statements
isArthur && isKing ? console.log("Arthur") : console.log("King");


//Immediately invoked functions
isArthur && isKing ? function () {
  console.log("Arthur")
}() : function () {
  console.log("King")
}()

//Multiple statements
isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                     :
                     (weapon = "Long Sword", helmet = "Iron Helmet");
