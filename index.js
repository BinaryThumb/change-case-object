var camelCase = require('camel-case');
var snakeCase = require('snake-case');
var paramCase = require('param-case');

var changeKeys = function changeKeys(transformer, obj) {
    if (Array.isArray(obj)) {
        var r = [];
        for (var i = 0; i < obj.length; i++) {
            r.push(changeKeys(transformer, obj[i]));
        }
        return r;
    }
    else if (obj instanceof Date) {
        return obj;
    }
    else if (typeof obj === 'object' && obj) {

        var objectKeys = Object.keys(obj);
        return objectKeys.map(function keysMap(key) {
            return transformer(key);
        }).reduce(function keysReducer(object, changedKey, index) {
            var objValue = obj[objectKeys[index]];
            // console.log(objValue);
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
