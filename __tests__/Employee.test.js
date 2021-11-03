//Jest documentation here: https://jestjs.io/docs/getting-started
//dont forget to run the tests in the terminal do a npm run test

const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('getName of Employee returns the name of the Employee', () => {
    var employee = new Employee("Erin Beatty","ID123","erin@example.com")
    
    expect(employee.getName()).toBe("Erin Beatty");
  });

  test('getRole of Employee retuns the role',() =>{
    var employee = new Employee("Erin Beatty","ID123","erin@example.com")
    
    expect(employee.getRole()).toBe("Employee");
  })


  test('getID of Employee retuns the id',() =>{
    var employee = new Employee("Erin Beatty","ID123","erin@example.com")
    
    expect(employee.getId()).toBe("ID123");
  })

  test('getEmail of Employee retuns the email',() =>{
    var employee = new Employee("Erin Beatty","ID123","erin@example.com")
    
    expect(employee.getEmail()).toBe("erin@example.com");
  })
  
  