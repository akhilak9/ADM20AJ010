"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(id, name, salary, department, skills) {
        this.employee = {
            id: undefined,
            name: undefined,
            salary: undefined,
            permanent: undefined,
            department: undefined,
            skills: undefined
        };
        this.employee.id = id;
        this.employee.name = name;
        this.employee.salary = salary;
        this.employee.department = department;
        this.employee.skills = skills;
    }
    EmployeeTest.prototype.display = function () {
        console.log("ID: " + this.employee.id);
        console.log("Name: " + this.employee.name);
        console.log("Salary: " + this.employee.salary);
        console.log("Department ID: " + this.employee.department.id);
        console.log("Department Name: " + this.employee.department.name);
        var skills = this.employee.skills;
        for (var _i = 0; _i < skills.length; _i++) {
            var skill = skills[_i];
            console.log("skill[" + _i + "]:" + skill.id + ", " + skill.name);
        }
    };
    return EmployeeTest;
}());
var employeeTest = new EmployeeTest(10, "Akhila", 30000, {
    id: 100,
    name: "IT"
}, [
    {
        id: 11,
        name: "Java"
    },
    {
        id: 12,
        name: "SQL"
    },
]);
employeeTest.display();
