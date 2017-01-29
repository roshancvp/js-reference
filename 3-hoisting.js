/* Hoisting */

/*
 * Order:
 * Declared stuff: Variables, Declared functions
 * Operational code: return, assignment of anonymous functions etc.
 */

/*
 * Variables and functions are hoisted
 * to the top of the function scope
 */

function getNumber() {

  function number() {
    return 12;
  }

   return number(); // 8

  function number() { // redefines first number() function
    return 8;
  }
}

console.log(getNumber());


/*
 * Function Expressions are never hosited
 * They are treated as assignments
 */

function getNumber() {

  number = function () {
    return 12;
  }

  return number(); // 12

  number = function () {
    return 8;
  }
}

/*
 * Load order
 */
function getNumber() {
  var number = undefined;
  var number = undefined; // redefines first assignment

  number = function() {
    return 12;
  };

  return number();

  number = function() { // unreachable
    return 8;
  }
}


/* example 2 */

function getNumber() {

  return number();

  number = function () {
    return 12;
  }

  number = function () {
    return 8;
  }
}

/*
 * Load order
 */
function getNumber() {
  var number = undefined;
  var number = undefined; // redefines first assignment
  return number(); //undefined

  number = function() { // unreachable
    return 12;
  };

  number = function() { // unreachable
    return 8;
  }
}

console.log(getNumber());
