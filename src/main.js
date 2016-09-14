



// Default + Rest + Spread


function f1(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f1(3) == 15);

function f2(x, ...y) {
  // y is an Array
  return x * y.length;
}
console.log(f2(3, "hello", true) == 6);

function f3(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
console.log(f3(...[1,2,3]) == 6);



// Spread when used as an argument VALUE
// Rest when used as a parameter REFERENCE


// console.log(Math.max.apply(null, [-1, 5, 11, 3]));


// console.log(Math.max(...[-1, 5, 11, 3]));


/*var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
// arr1 is now ['a', 'b', 'c', 'd']*/


/*const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
// arr1 is now ['a', 'b', 'c', 'd']*/

// Promises




// Modules

/*import aVM from './view-model/a.js';
import './view-model/b.js';
import pubSub from 'pubsub-js';

aVM();

pubSub.publish('alerter');*/




// In addition

// For-of (is to Arrays as For-in is to Objects) But preference higher-order functions

/*const numbers = [0, 1, 13 , 3, -11];

for (const number of numbers) {
  console.log(number);
}*/


// Named parameters

/*function selectEntries(options) {
  var start = options.start || 0;
  var end = options.end || -1;
  var step = options.step || 1;

}

selectEntries({ start: 0, end: -1 });



function _selectEntries({ start=0, end=-1, step=1 }) {

}*/


// Optional parameter (isn't this ugly?)

/*function selectEntries(options) {
  options = options || {}; // (A)
  var start = options.start || 0;
  var end = options.end || -1;
  var step = options.step || 1;
}

function selectEntries({ start=0, end=-1, step=1 } = {}) {

}

selectEntries();

*/