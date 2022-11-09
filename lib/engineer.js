const Employee = require("../lib/employee");

class Engineer extends Employee{
    //constructor that calls parent class constructor to set name, id and email properties and then sets its own github property
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    //"getter" for the engineers github property
    getGithub(){
        return this.github;
    }
    //overriding employee's getRole function to return correct role name
    getRole(){
        return "Engineer";
    }
    //NOTE: setters are not necessary in this case as the contructor is meant to be the only means of setting property values and getters for name, id and email are inherited
}

module.exports = Engineer;