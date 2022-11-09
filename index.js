const generateHTML = require("./src/generateHTML");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
let teamMembers = [];

//each team can only have 1 manager, so this option/input is only ran once per team
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter information about the manager",
            validate: managerName => {
                if(managerName){
                    return true;
                }else{
                    console.log("Invalid input, Please correctly enter the Manager's name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Manager's ID",
            validate: id =>{
                if(!isNaN(id)){
                    return true;
                }else{
                    console.log("Invalid input, please correctly enter the Manager's ID");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Manager's email address",
            validate: email =>{
                validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if(validEmailFormat){
                    return true;
                }else{
                    console.log("Invalid input, please enter valid email address for the manager");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the Manager's office number",
            validate: officeNumber =>{
                if(!isNaN(officeNumber)){
                    return true;
                }else{
                    console.log("Invalid input, please corretly enter the Manager's office number");
                    return false;
                }
            }
        }
    ]).then(managerInfo =>{
        let { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
    });
};

//each team can have as many employee's as they desire, so this keeps running/prompting until the user decides to stop adding employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose the type of Employee this is",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter the name of the employee", 
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log ("Invalid input, please enter the Employee's name correctly");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee's ID",
            validate: id => {
                if  (!isNaN(id)) {
                    return true; 
                } else {
                    console.log ("Invalid input, please enter the Employee's name correctly");
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employee's email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Invalid input, please enter the Employee's name correctly");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter the employee's github (username)",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github ) {
                    return true;
                } else {
                    console.log ("Invalid input, please enter the Employee's GitHub correctly");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log ("Invalid input, please enter the Employee's school correctly")
                }
            }
        },
        {
            type: "confirm",
            name: "addAnotherEmployee",
            message: "Are there more team members?",
            default: false
        }
    ]).then(employeeInfo => {
        let {name, id, email, role, github, school, addAnotherEmployee} = employeeInfo;
        //must declare outside of if statements due to scoping issues
        let employee;
        
        if(role === "Engineer"){
            employee = new Engineer(name, id, email, github);
        }else if(role === "Intern"){
            employee = new Intern(name, id, email, school);
        }

        teamMembers.push(employee);

        if(addAnotherEmployee){
            return addEmployee(teamMembers);
        }else{
            return teamMembers;
        }
    });
};

//generating html page using fs
const writeFile = data =>{
    fs.writeFile("./dist/index.html", data, err =>{
        if(err){
            console.log(err);
            return;
        }else{
            console.log("Congrats! The team profile has been generated successfully! Check it out @ index.html in the 'dist' folder!");
        }
    });
};

//initiallize the app
addManager().then(addEmployee).then(teamMembers => {
    return generateHTML(teamMembers);
}).then(htmlPage =>{
    return writeFile(htmlPage);
}).catch(err =>{
    console.log(err);
});