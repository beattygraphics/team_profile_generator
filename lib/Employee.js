class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.type = "Employee";
    }

    getRole() {
        return this.type;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email
    }
}

    module.exports = Employee