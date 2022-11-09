class Employee {
    //constructor that when employee is initialized, the name, id and email properties of employee that were passed are assigned
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //"getter" for name property
    getName(){
        return this.name;
    }
    //"getter" for id property
    getId(){
        return this.id;
    }
    //"getter" for email property
    getEmail(){
        return this.email;
    }
    //"getter" for type of employee, since other classes will inherit from this one, this method will be passed down and actually be used in the other classes
    getRole(){
        return "Employee";
    }
    //NOTE: setters are not necessary in this case as the contructor is meant to be the only means of setting property values
}

module.exports = Employee;