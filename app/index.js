const _ = require('underscore');
const base = 256;

const createKey = (date) => {
  return date.replace(/[\/-]/g, '').split('');
}

const transform = (raw, date, pass, encoding) => {
  const buffer    = Buffer.from(raw, encoding);
  const key       = createKey(date);
  const keyLength = _.size(key);

  let step, transformed;

  return new Buffer(_.map(buffer, (c, i) => {
    step = pass*key[i % keyLength];
    transformed =  c + step;

    return( ( base + ( transformed % base ) ) % base );
  }));
}

const cypher = (raw, date, encoding) => {
  return transform(raw, date, 1, encoding);
}

const decipher = (raw, date, encoding) => {
  return transform(raw, date, -1, encoding);
}

const DateCypher = {
  cypher: cypher,
  decipher: decipher
}

module.exports = DateCypher;
