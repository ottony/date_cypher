# DateCypher
DateCypher is a simple cypher implementation with javascript.

# Using
First, import the dist/index.js file. It contain a DateCyper object with `cypher` and `decipher` static functions that returns a node Buffer.

```javascript
const DateCypher = require('./dist/index.js'); 
```

```javascript
DateCypher.cypher(raw, date, encoding);
```

```javascript
DateCypher.decipher(raw, date, encoding);
```

`raw` is the text.
`date` is a date choosed, folow these format: `mm/dd/yyyy`;

## Development

To use in development, you should install the dependencies and run npm as dev mode. It will watch your files and automatically reload the application per update.

```shell
npm install
npm run dev
```

# Example

```javascript
  let raw = 'Some texto to be ciphered';
  let date = '23/06/1993';
  
  let cy  = DateCypher.cypher(raw, date);
  let dec = DateCypher.decipher(cy.toString('hex'), date, 'hex');
  
  console.log(raw);
  console.log(cy.toString());
  console.log(cy.toString('hex'));
  console.log(dec.toString());
```

```node
> raw
'Some texto to be ciphered'
> cy.toString()
'Urmk!}n{vr zp)kh"fivin{hf'
> cy.toString('hex')
'55726d6b217d6e7b7672207a70296b6822666976696e7b6866'
> dec.toString()
'Some texto to be ciphered'
```
