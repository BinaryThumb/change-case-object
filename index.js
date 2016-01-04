var camelCase = require('camel-case');
var snakeCase = require('snake-case');
var paramCase = require('param-case');

var changeKeys = function changeKeys(transformer, obj) {
  var objectKeys;

  if (Array.isArray(obj)) {
    return obj.map(function keysMap(key) {
      if (typeof key === 'string') {
        return transformer(key);
      }

      return changeKeys(transformer, key);
    });
  } else if (typeof obj === 'object' && obj !== null) {
    objectKeys = Object.keys(obj);
    return objectKeys.map(function keysMap(key) {
      return transformer(key);
    }).reduce(function keysReducer(object, changedKey, index) {
      var objValue;
      var transformedValue;

      objValue = obj[objectKeys[index]];
      transformedValue = changeKeys(transformer, objValue);
      object[changedKey] = transformedValue;
      return object;
    }, {});
  }

  return obj;
};

var changeCaseObject = {};
changeCaseObject.camel = changeCaseObject.camelCase = function camelCaseObject(obj) {
  if (typeof obj === 'string') {
    return camelCase(obj);
  }

  return changeKeys(camelCase, obj);
};

changeCaseObject.snake = changeCaseObject.snakeCase = function snakeCaseObject(obj) {
  if (typeof obj === 'string') {
    return snakeCase(obj);
  }

  return changeKeys(snakeCase, obj);
};

changeCaseObject.param = changeCaseObject.paramCase = function paramCaseObject(obj) {
  if (typeof obj === 'string') {
    return paramCase(obj);
  }

  return changeKeys(paramCase, obj);
};

module.exports = changeCaseObject;
