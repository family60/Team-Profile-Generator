const Engineer = require('../lib/engineer');

test("Creates Engineer?", () => {
    //creating engineer and passing arbitrary parameters
    const engineer = new Engineer("Kush", 1, "kushrpatel06@yahoo.com", "family60");
    //telling the test that each field should be of the correct data type and not empty
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("All Class functions/methods work as intended?", () => {
    //creating engineer and passing arbitrary parameters
    const engineer = new Engineer("Kush", 1, "kushrpatel06@yahoo.com", "family60");
    //telling the test that each class function/method should return field (again, of correct data type and not empty)
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual("Engineer");
});