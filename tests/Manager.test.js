const Manager = require('../lib/manager');

test("Creates Manager?", () => {
    //creating manager and passing arbitrary parameters
    const manager = new Manager("Kush", 1, "kushrpatel06@yahoo.com", 1234567890);
    //telling the test that each field should be of the correct data type and not empty
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("All Class functions/methods work as intended?", () => {
    //creating manager and passing arbitrary parameters
    const manager = new Manager("Kush", 1, "kushrpatel06@yahoo.com", 1234567890);
    //telling the test that each class function/method should return field (again, of correct data type and not empty)
    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual("Manager");
});