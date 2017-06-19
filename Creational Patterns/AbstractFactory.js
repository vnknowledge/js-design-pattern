function Employee(name) {
    this.name = name;

    this.say = function() {
        log.add("I am employee " + name);
    };
}

function EmployeeFactory() {
    this.create = function(name) {
        return new Employee(name);
    }
}

function Vendor(name) {
    this.name = name;

    this.say = function() {
        log.add("I am vendor " + name);
    };
}

function VendorFactory() {
    this.create = function(name) {
        return new Vendor(name);
    };
}

// log helper
var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    };
})();

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("John DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(employeeFactory.create("Gerald Watson"));
    persons.push(employeeFactory.create("Nicole McNight"));

    for(var idx = 0; idx < persons.length; ++idx) {
        persons[idx].say();
    }

    log.show();
}

run();