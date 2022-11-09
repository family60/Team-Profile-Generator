const Employee = require("../lib/employee");

class Manager extends Employee{
    //constructor that calls parent class constructor to set name, id and email properties and then sets its own officeNumber property
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //"getter" for the Managers officeNumber property
    getOfficeNumber(){
        return this.officeNumber;
    }
    //overriding employee's getRole function to return correct role name
    getRole(){
        return "Manager";
    }
    //NOTE: setters are not necessary in this case as the contructor is meant to be the only means of setting property values and getters for name, id and email are inherited
}

module.exports = Manager;