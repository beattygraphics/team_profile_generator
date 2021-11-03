//Jest documentation here: https://jestjs.io/docs/getting-started
//dont forget to run the tests in the terminal do a npm run test

const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern= require('../lib/Intern');

test('getSchool of Intern returns the School', () => {
    var employee = new Intern("Erin Beatty","ID123","erin@example.com","School")
    
    expect(employee.getSchool()).toBe("School");
  })
