/**
 * Created by steve.gibbings on 14/03/2016.
 */
"use strict";

// As if by magic.... https://github.com/zloirock/core-js
require("babel-polyfill");

class Bear {
  constructor(type) {
    this.type = type;
  }

  say(words) {
    setTimeout(() => {
      console.log(this.type, 'says', words);
    }, 1000);
  }
}

var myBear = new Bear('grizzly');

myBear.say('grrrr');
