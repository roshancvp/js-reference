/* Hoisting */

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
