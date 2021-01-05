// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, title) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    // function to return fields
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Employee;