//Jest documentation here: https://jestjs.io/docs/getting-started
//dont forget to run the tests in the terminal do a npm run test

const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('getOfficeNumber of Manager returns the office number', () => {
    var employee = new Manager("Erin Beatty","ID123","erin@example.com","867-5309")
    
    expect(employee.getOfficeNumber()).toBe("867-5309");
  })
