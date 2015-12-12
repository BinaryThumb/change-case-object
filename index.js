var camelCase = require('camel-case');
var snakeCase = require('snake-case');
var paramCase = require('param-case');

var changeKeys = function changeKeys(transformer, obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var r = [];
        for (var i = 0; i < obj.length; i++) {
            console.log(obj[i]);
            r.push(changeKeys(transformer, obj[i]));
        }
        return r;
    } else if (typeof obj === 'object') {
        var objectKeys = Object.keys(obj);
        return objectKeys.map(function keysMap(key) {
            return transformer(key);
        }).reduce(function keysReducer(object, changedKey, index) {
            var objValue = obj[objectKeys[index]];

            var transformedValue = changeKeys(transformer, objValue);
            object[changedKey] = transformedValue;
            return object;
        }, {});
    }
    else {
        return obj;
    }

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
