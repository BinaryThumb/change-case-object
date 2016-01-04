var chai = require('chai');
var expect = chai.expect;

var changeCaseObject = require('../index');

describe('change-case-object', function () {
  it('camelCase', function () {
    var initialObj = {
      'hello_world': 'test',
    };

    var fixtureObj = {
      'helloWorld': 'test',
    };
    expect(changeCaseObject.camelCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('camelCase (special characters)', function () {
    var initialObj = {
      'hello_world': 'n#mä!%ads$§a',
    };

    var fixtureObj = {
      'helloWorld': 'n#mä!%ads$§a',
    };
    expect(changeCaseObject.camelCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('camelCase (Array of Object)', function () {
    var initialArrObj = [
      { 'hello_world': 'test' },
      { is_Active: true },
      { isActive: true },
    ];

    var fixtureArrObj = [
      { 'helloWorld': 'test' },
      { isActive: true },
      { isActive: true },
    ];

    expect(changeCaseObject.camelCase(initialArrObj)).to.deep.equal(fixtureArrObj);
  });

  it('camelCase (Array of string)', function () {
    var initialArrStr = ['is_active', 'is_blocked'];

    var fixtureArrStr = ['isActive', 'isBlocked'];

    expect(changeCaseObject.camelCase(initialArrStr)).to.deep.equal(fixtureArrStr);
  });

  it('camelCase (Primitive - string)', function () {
    var initialPrimitive = 'is_active';

    var fixturePrimitive = 'isActive';

    expect(changeCaseObject.camelCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('camelCase (Primitive - number)', function () {
    var initialPrimitive = 42;

    var fixturePrimitive = 42;

    expect(changeCaseObject.camelCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('camelCase (Primitive - bool)', function () {
    var initialPrimitive = true;

    var fixturePrimitive = true;

    expect(changeCaseObject.camelCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('camelCase (deep)', function () {
    var initialObj = {
      'hello_world': {
        'hello_there': 'name',
        'my_name': 'someone',
      },
    };

    var fixtureObj = {
      'helloWorld': {
        'helloThere': 'name',
        'myName': 'someone',
      },
    };

    expect(changeCaseObject.camelCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('camelCase (edge cases)', function () {
    expect(changeCaseObject.camelCase(null)).to.equal(null);
    expect(changeCaseObject.camelCase({})).to.a('object');
    expect(changeCaseObject.camelCase([])).to.a('array');
    expect(changeCaseObject.camelCase(Infinity)).to.equal(Infinity);
    expect(changeCaseObject.camelCase(NaN)).to.a('number');
  });

  it('paramCase', function () {
    var initialObj = {
      'helloWorld': 'test',
    };

    var fixtureObj = {
      'hello-world': 'test',
    };

    expect(changeCaseObject.paramCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('paramCase (special characters)', function () {
    var initialObj = {
      'helloWorld': 'n#mä!%ads$§a',
    };

    var fixtureObj = {
      'hello-world': 'n#mä!%ads$§a',
    };
    expect(changeCaseObject.paramCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('paramCase (Array of Object)', function () {
    var initialArrObj = [
      { 'hello_world': 'test' },
      { is_Active: true },
      { isActive: true },
    ];

    var fixtureArrObj = [
      { 'hello-world': 'test' },
      { 'is-active': true },
      { 'is-active': true },
    ];

    expect(changeCaseObject.paramCase(initialArrObj)).to.deep.equal(fixtureArrObj);
  });

  it('paramCase (Array of string)', function () {
    var initialArrStr = ['is_active', 'is_blocked'];

    var fixtureArrStr = ['is-active', 'is-blocked'];

    expect(changeCaseObject.paramCase(initialArrStr)).to.deep.equal(fixtureArrStr);
  });

  it('paramCase (Primitive - string)', function () {
    var initialPrimitive = 'is_active';

    var fixturePrimitive = 'is-active';

    expect(changeCaseObject.paramCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('paramCase (Primitive - number)', function () {
    var initialPrimitive = 42;

    var fixturePrimitive = 42;

    expect(changeCaseObject.paramCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('paramCase (Primitive - bool)', function () {
    var initialPrimitive = true;

    var fixturePrimitive = true;

    expect(changeCaseObject.paramCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('paramCase (deep)', function () {
    var initialObj = {
      'helloWorld': {
        'helloThere': 'name',
        'myName': 'someone',
      },
    };

    var fixtureObj = {
      'hello-world': {
        'hello-there': 'name',
        'my-name': 'someone',
      },
    };

    expect(changeCaseObject.paramCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('paramCase (edge cases)', function () {
    expect(changeCaseObject.paramCase(null)).to.equal(null);
    expect(changeCaseObject.paramCase({})).to.a('object');
    expect(changeCaseObject.paramCase([])).to.a('array');
    expect(changeCaseObject.paramCase(Infinity)).to.equal(Infinity);
    expect(changeCaseObject.paramCase(NaN)).to.a('number');
  });

  it('snakeCase', function () {
    var initialObj = {
      'helloWorld': 'test',
    };

    var fixtureObj = {
      'hello_world': 'test',
    };

    expect(changeCaseObject.snakeCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('snakeCase (special characters)', function () {
    var initialObj = {
      'helloWorld': 'n#mä!%ads$§a',
    };

    var fixtureObj = {
      'hello_world': 'n#mä!%ads$§a',
    };
    expect(changeCaseObject.snakeCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('snakeCase (Array of Object)', function () {
    var initialArrObj = [
      { 'helloWorld': 'test' },
      { isActive: true },
      { 'is-Active': true },
    ];

    var fixtureArrObj = [
      { 'hello_world': 'test' },
      { is_active: true },
      { is_active: true },
    ];

    expect(changeCaseObject.snakeCase(initialArrObj)).to.deep.equal(fixtureArrObj);
  });

  it('snakeCase (Array of string)', function () {
    var initialArrStr = ['isActive', 'isBlocked'];

    var fixtureArrStr = ['is_active', 'is_blocked'];

    expect(changeCaseObject.snakeCase(initialArrStr)).to.deep.equal(fixtureArrStr);
  });

  it('snakeCase (Primitive - string)', function () {
    var initialPrimitive = 'isActive';

    var fixturePrimitive = 'is_active';

    expect(changeCaseObject.snakeCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('snakeCase (Primitive - number)', function () {
    var initialPrimitive = 42;

    var fixturePrimitive = 42;

    expect(changeCaseObject.snakeCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('snakeCase (Primitive - bool)', function () {
    var initialPrimitive = true;

    var fixturePrimitive = true;

    expect(changeCaseObject.snakeCase(initialPrimitive)).to.deep.equal(fixturePrimitive);
  });

  it('snakeCase (deep)', function () {
    var initialObj = {
      'helloWorld': {
        'helloThere': 'name',
        'myName': 'someone',
      },
    };

    var fixtureObj = {
      'hello_world': {
        'hello_there': 'name',
        'my_name': 'someone',
      },
    };

    expect(changeCaseObject.snakeCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('snakeCase (edge cases)', function () {
    expect(changeCaseObject.snakeCase(null)).to.equal(null);
    expect(changeCaseObject.snakeCase({})).to.a('object');
    expect(changeCaseObject.snakeCase([])).to.a('array');
    expect(changeCaseObject.snakeCase(Infinity)).to.equal(Infinity);
    expect(changeCaseObject.snakeCase(NaN)).to.a('number');
  });
});
