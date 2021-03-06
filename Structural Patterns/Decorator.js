var User = function (name) {
    this.name = name;

    this.say = function () {
        log.add("User: " + this.name);
    };
};

var DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function () {
        log.add("Decorator User: " + this.name + ", " + this.street + ", " + this.city);
    };
};

// logging helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {
    var user = new User("Kelly");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();

    log.show();
}

run();