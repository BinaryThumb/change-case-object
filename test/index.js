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
});
