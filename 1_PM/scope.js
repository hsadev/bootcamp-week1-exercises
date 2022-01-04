/**
 * Part 1:
 *    What will print and why?
 *    It will print 1, 2, and undefined
 *    What will change if we delete line 15? Why?
 *    If we delete line 15, it will print 1, 2, 1 because the value of a is defined  globally in line 25
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

function x() {
  var a = 2;
  console.log(a);
}

function y() {
  var a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
