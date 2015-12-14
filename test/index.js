var chai = require('chai');
var expect = chai.expect;

var changeCaseObject = require('../index');

describe('change-case-object', function() {
  it('camelCase', function() {
    var initialObj = {
      'hello_world': 'test',
    };

    var fixtureObj = {
      'helloWorld': 'test',
    };
    expect(changeCaseObject.camelCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('camelCase (Array of Object)', function() {
    var initialArrObj = [
      {'hello_world': 'test'},
      {is_Active: true},
      {isActive: true},
    ];

    var fixtureArrObj = [
      {'helloWorld': 'test'},
      {isActive: true},
      {isActive: true},
    ];

    expect(changeCaseObject.camelCase(initialArrObj)).to.deep.equal(fixtureArrObj);
  });

  it('camelCase (Array of string)', function() {
    var initialArrStr = ['is_active', 'is_blocked'];

    var fixtureArrStr = ['isActive', 'isBlocked'];
    expect(changeCaseObject.camelCase(initialArrStr)).to.deep.equal(fixtureArrStr);
  });


  it('camelCase (deep)', function() {
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

  it('paramCase', function() {
    var initialObj = {
      'helloWorld': 'test',
    };

    var fixtureObj = {
      'hello-world': 'test',
    };

    expect(changeCaseObject.paramCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('paramCase (deep)', function() {
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

  it('snakeCase', function() {
    var initialObj = {
      'helloWorld': 'test',
    };

    var fixtureObj = {
      'hello_world': 'test',
    };

    expect(changeCaseObject.snakeCase(initialObj)).to.deep.equal(fixtureObj);
  });

  it('snakeCase (deep)', function() {
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
});
