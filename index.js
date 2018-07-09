const _ = require('lodash');

const numbers = [22, 43, 54, 65, 23, 67];

_.each(numbers, function(number, i) {
  console.log(number);
});