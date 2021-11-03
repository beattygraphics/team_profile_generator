//Jest documentation here: https://jestjs.io/docs/getting-started
//dont forget to run the tests in the terminal do a npm run test

const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('getGithub of Engineer returns the Github User Name', () => {
    var employee = new Engineer("Erin Beatty","ID123","erin@example.com","erinGit")
    
    expect(employee.getGithub()).toBe("erinGit");
  })
