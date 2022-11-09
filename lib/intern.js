const Employee = require("../lib/employee");

class Intern extends Employee{
    //constructor that calls parent class constructor to set name, id and email properties and then sets its own school property
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    //"getter" for the Interns school property
    getSchool(){
        return this.school;
    }
    //overriding employee's getRole function to return correct role name
    getRole(){
        return "Intern";
    }
    //NOTE: setters are not necessary in this case as the contructor is meant to be the only means of setting property values and getters for name, id and email are inherited
}

module.exports = Intern;