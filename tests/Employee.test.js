const Employee = require('../lib/employee');

test("Creates Employee?", () => {
    //creating employee and passing arbitrary parameters
    const employee = new Employee("Kush", 1, "kushrpatel06@yahoo.com");
    //telling the test that each field should be of the correct data type and not empty
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("All Class functions/methods work as intended?", () => {
    //creating employee and passing arbitrary parameters
    const employee = new Employee("Kush", 1, "kushrpatel06@yahoo.com");
    //telling the test that each class function/method should return field (again, of correct data type and not empty)
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual("Employee");
});