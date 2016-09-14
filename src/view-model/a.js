/**
 * Created by steve.gibbings on 19/05/2016.
 */
import pubsub from 'pubsub-js';

export default ()=> {
  const alerter = function () {
    "use strict";
    console.log('yay AAAAAAA');
  }

  pubsub.subscribe('alerter', alerter);

};
