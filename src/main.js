/**
 * Created by steve.gibbings on 14/03/2016.
 */
"use strict";

// As if by magic.... http://babeljs.io/docs/usage/polyfill/
import "babel-polyfill";

class Bear {
  constructor(type) {
    this.type = type;
  }

  say(words) {
    setTimeout(() => {
      console.log(`${this.type} says ${words}`);
    }, 1000);
  }
}

const myBear = new Bear('grizzly');

myBear.say('grrrr');

let myArray = [1, 2, 3, 4];

let [first, second, third, ...more] = myArray;

console.log(first, second, third, more);
