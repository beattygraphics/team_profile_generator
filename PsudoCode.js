//SETUP

// 1. npm init a package.json to hold your dependencies
// 2. nmp install inquirer and jest and anything else you will need
// 3. basic File set up (classes in lib, tests in a test folder, .gitignore)

// Code execution flow

// Welcome to the team generator (initial messaging)

// inquirer prompt to build manager profile
    // have a variable on your index.js, array of employees
    //When done asking messaging we will save these to:
        //pass these answers to a manager class
        // Take object and stick it in a Array
    // inside the .then
        // call another inquirer.prompt. (anotherEmployeePrompt)

function anotherEmployeePrompt() {
    inquirer.prompt([
        {
            text: "Do you want to add another Employee"
        }
    ])
    .then(() => {
        // if they pick engineer, as the engineer questions
        // if intern, ask the intern questions
        // if nothing write the file, call anotehr function passing the array of employees
    })
}
//you shoul separate all your inquirer prompts into individual prompts.
// use spread to ask the questions.  all common questions.

// Manager Class
    //require employee class to extend it
    // Properties
        // phon

// Employee Class
    //PROPERTIES
      // name
      // id
      // email
    // Methods
        // getName() {
        //  return this.name;
        // }

        // employee.name


// last question should prpmpt fpr anptehr employee or another function that askes anotehr set of questions.
// If no other employees, then build the file.

// Write the tests for the classes
    //When I mak an employee do I get these responses?
    //Keep them Simple