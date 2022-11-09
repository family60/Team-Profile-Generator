const Intern = require('../lib/intern');

test("Creates Intern?", () => {
    //creating intern and passing arbitrary parameters
    const intern = new Intern("Kush", 1, "kushrpatel06@yahoo.com", "HBSS");
    //telling the test that each field should be of the correct data type and not empty
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("All Class functions/methods work as intended?", () => {
    //creating intern and passing arbitrary parameters
    const intern = new Intern("Kush", 1, "kushrpatel06@yahoo.com", "HBSS");
    //telling the test that each class function/method should return field (again, of correct data type and not empty)
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual("Intern");
});