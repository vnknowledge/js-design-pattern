var Employee = function(name, salary, vacation) {
    var self = this;

    this.accept = function(visitor) {
        visitor.visit(self);
    };

    this.getName = function() {
        return name;
    };

    this.getSalary = function() {
        return salary;
    };

    this.setSalary = function(salary) {
        this.salary = salary;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function(vacation) {
        this.vaction = vacation;
    };
};

var ExtraSalary = function() {
    this.visit = function(emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function() {
    this.visit = function(emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    };
})();

function run() {
    var employees = [
        new Employee("John", 10000, 10),
        new Employee("Mary", 200000, 21),
        new Employee("Boss", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for(var idx = 0; idx < employees.length; idx++) {
        var emp = employees[idx];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        log.add(emp.getName() + ": $" + emp.getSalary() + " and " + emp.getVacation() + " vacation days");

        log.show();
    }
}

run();