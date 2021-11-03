const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { exit } = require("process");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

let thisManager;



const teamMembers = [];

function start() {
    managerQuery();
}

function managerQuery(){
    //prompt and save team manager stuff
    inquirer.prompt([
         {
            name: "managerName",
            message: "What is your manager's name?",
            type: "input",
          },
          {
            name: "managerID",
            message: "What is your manager's employee ID?",
            type: "input",
          },
          {
            name: "managerEmail",
            message: "What is your manager's email?",
            type: "input",
          },
          {
            name: "managerOfficeNumber",
            message: "What is your manager's office number?",
            type: "input",
          }

    ]).then(function(answers){
        const managerName = answers.managerName;
        const managerID = answers.managerID;
        const managerEmail = answers.managerEmail;
        const managerOfficeNumber = answers.managerOfficeNumber;

        thisManager = new Manager(managerName,managerID,managerEmail,managerOfficeNumber);
       // console.log("Manager Info",thisManager);

        //show menu
        showMenu();

    });


}

function showMenu(){
    inquirer.prompt([
        {
            name:"employeeType",
            message: "What would you like to do next",
            type: "list",
            choices: ["Add Engineer", "Add Intern","Finish"],
        }
    ]).then(function(answer){
        let choice = answer.employeeType;

        if(choice==="Add Engineer"){
            //do engineer questions
            //prompt and save team manager stuff
                inquirer.prompt([
                    {
                    name: "name",
                    message: "What is your engineer's name?",
                    type: "input",
                    },
                    {
                    name: "id",
                    message: "What is your engineer's employee ID?",
                    type: "input",
                    },
                    {
                    name: "email",
                    message: "What is your engineer's email?",
                    type: "input",
                    },
                    {
                    name: "github",
                    message: "What is your engineers's github username?",
                    type: "input",
                    }

            ]).then(function(answers){
                const name = answers.name;
                const id = answers.id;
                const email = answers.email;
                const github = answers.github;

                let engineer = new Engineer(name,id,email,github);
                teamMembers.push(engineer);

                //show menu
                showMenu();

            });


        }
        else if(choice=="Add Intern"){
            //do Intern questions

            inquirer.prompt([
                {
                name: "name",
                message: "What is your intern's name?",
                type: "input",
                },
                {
                name: "id",
                message: "What is your intern's employee ID?",
                type: "input",
                },
                {
                name: "email",
                message: "What is your intern's email?",
                type: "input",
                },
                {
                name: "school",
                message: "What is your intern's school?",
                type: "input",
                }

        ]).then(function(answers){
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            const school = answers.school;

            let intern = new Intern(name,id,email,school);
            teamMembers.push(intern);

            //show menu
            showMenu();

        });
        }
        else{
            //do finish things

            //console.log("Team members",teamMembers)

            // - geneartes the html
            makeHTML();
        }

    });
}


function makeHTML(){
    fs.readFile('./src/index.html', 'utf-8', function(error, source){
    
        handlebars.registerHelper('get_role', function(employee){
            return employee.getRole();
          })

          handlebars.registerHelper('get_office_number', function(manager){
            return manager.getOfficeNumber();
          })

          handlebars.registerHelper('get_name', function(employee){
            return employee.getName();
          })

          handlebars.registerHelper('get_email', function(employee){
            return employee.getEmail();
          })

          handlebars.registerHelper('get_id', function(employee){
            return employee.getId();
          })

          handlebars.registerHelper('get_github', function(engineer){
            return engineer.getGithub();
          })

          handlebars.registerHelper('get_school', function(intern){
            return intern.getSchool();
          });


          //filters team members for the template
          var myEngineers = teamMembers.filter(function(member){
              return member.getRole()=='Engineer'
          });

          var myInterns = teamMembers.filter(function(member){
              return member.getRole()=='Intern';
          });

          
        
        var data = {
            manager:thisManager,
            engineers:myEngineers,
            interns:myInterns

        };

        var template = handlebars.compile(source);
        var html = template(data);

        //write out to destination
        let filename = "./dist/index.html";


        fs.writeFile(filename, html, "utf-8",function (err) {
            if (err) return console.log(err);

            //copy the css source to dist folder
            fs.readFile('./src/style.css', 'utf-8', function(error, source){
                fs.writeFile('./dist/style.css', source, "utf-8",function (err) {
                    if (err) return console.log(err);
                    console.log("Please see dist/index.html for team web page");
                });
            });

           
          });

        


        
    });
}





function addTeamMember() {
    // .then(val => {
    //     if (val.what_type === "Engineer") {
    //         engineerQuery();
    //     } else if (val.what_type === "Intern") {
    //         internQuery();
    //     } else {
    //         createFile();
    //     }
    // })
};



function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
}

start();