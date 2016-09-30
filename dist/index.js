'use strict';

var _ = require('underscore');
var base = 255;

var createKey = function createKey(date) {
  return date.replace(/[\/-]/g, '').split('');
};

var transform = function transform(raw, date, pass, encoding) {
  var buffer = Buffer.from(raw, encoding);
  var key = createKey(date);
  var keyLength = _.size(key);

  var step = void 0,
      transformed = void 0;

  return new Buffer(_.map(buffer, function (c, i) {
    step = pass * key[i % keyLength];
    transformed = c + step;

    return (base + transformed % base) % base;
  }));
};

var cypher = function cypher(raw, date, encoding) {
  return transform(raw, date, 1, encoding);
};

var decipher = function decipher(raw, date, encoding) {
  return transform(raw, date, -1, encoding);
};

var DateCypher = {
  cypher: cypher,
  decipher: decipher
};

module.exports = DateCypher;