// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, title){

        super(name,id,email);
        this.github = github;
        this.title = "Engineer";
    }

    // function to return fields
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;