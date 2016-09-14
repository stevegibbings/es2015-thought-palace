/**
 * Created by steve.gibbings on 19/05/2016.
 */
import pubsub from 'pubsub-js';

const alerter = function() {
  "use strict";
  console.log('yay BBBBBBB');
}

pubsub.subscribe('alerter', alerter);