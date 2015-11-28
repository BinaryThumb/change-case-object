var camelCase = require('camel-case');
var snakeCase = require('snake-case');
var paramCase = require('param-case');

var changeKeys = function changeKeys(transformer, obj) {
  var objectKeys = Object.keys(obj);

  return objectKeys.map(function keysMap(key) {
    return transformer(key);
  }).reduce(function keysReducer(object, changedKey, index) {
    var objValue = obj[objectKeys[index]];

    var transformedValue = (typeof objValue === 'object') ? changeKeys(transformer, objValue) : objValue;
    object[changedKey] = transformedValue;

    return object;
  }, {});
};

var changeCaseObject = {};
changeCaseObject.camel = changeCaseObject.camelCase = function camelCaseObject(obj) {
  return changeKeys(camelCase, obj);
};

changeCaseObject.snake = changeCaseObject.snakeCase = function snakeCaseObject(obj) {
  return changeKeys(snakeCase, obj);
};

changeCaseObject.param = changeCaseObject.paramCase = function paramCaseObject(obj) {
  return changeKeys(paramCase, obj);
};

module.exports = changeCaseObject;
