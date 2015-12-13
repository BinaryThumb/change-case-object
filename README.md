# change-case-object

[![Build Status](https://travis-ci.org/BinaryThumb/change-case-object.svg?branch=master)](https://travis-ci.org/BinaryThumb/change-case-object)
[![Dependency Status](https://david-dm.org/BinaryThumb/change-case-object.svg)](https://david-dm.org/BinaryThumb/change-case-object)
[![devDependency Status](https://david-dm.org/BinaryThumb/change-case-object/dev-status.svg)](https://david-dm.org/BinaryThumb/change-case-object#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/BinaryThumb/change-case-object/badge.svg?branch=master&service=github)](https://coveralls.io/github/BinaryThumb/change-case-object?branch=master)
[![Code Climate](https://codeclimate.com/github/BinaryThumb/change-case-object/badges/gpa.svg)](https://codeclimate.com/github/BinaryThumb/change-case-object)

Changes the case of all object's keys,Array,String

## Installation

`npm install change-case-object`
Currently, only CommonJS environments are supported. (This means Node.js and browser with `browserify` or `webpack`)

## Example

```javascript
var changeCaseObject = require('change-case-object');

var myObject = {
  hello_world: 'hi',
};

var newObject = changeCaseObject.camelCase(myObject);
// {helloWorld: 'hi'}
```

## Methods
All methods are available under the `changeCaseObject` object after the module has been required.

### .camelCase
Conerts all object keys into camel case.  
`hello_world -> helloWorld`

### .snakeCase
Conerts all object keys into snake case.  
`helloWorld -> hello_world`

### .paramCase
Conerts all object keys into param case.  
`helloWorld -> hello-world`

Shorthand methods are also available:
```
.camelCase -> .camel
.snakeCase -> .snake
.paramCase -> .param
```

## Code Guideline
AirBnB ES5

## License
MIT
