function Flywieght(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
}

var FlyWieghtFactory =(function () {
    var flyweights = {};

    return {

        get: function(make, model, processor) {
            if(!flyweights[make + model]) {
                flyweights[make + model] = new Flywieght(make, model, processor);
            }
            return flyweights[make + model];
        },
        
        getCount: function() {
            var count = 0;
            for(var f in flyweights) count ++;
            return count;;
        }

    }
})();

function ComputerCollection() {
    var computers = {};
    var count = 0;

    return {
        add: function(make, model, processor, memory, tag) {
            computers[tag] = new Computer(make, model, processor, memory, tag);
            count++;
        },

        get: function(tag) {
            return computers[tag];
        },

        getCount: function() {
            return count;
        }
    }
}

var Computer = function(make, model, processor, memory, tag) {
    this.flywieght = FlyWieghtFactory.get(make, model, processor);
    this.tag = tag;
    this.getMake = function() {
        return this.flyweight.make;
    };
    // ...
};

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {
    var computer = new ComputerCollection();

    computer.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computer.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computer.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computer.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computer.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computer.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computer.add("HP", "Envy", "Intel", "2G", "TXU003283");

    log.add("Computers: " + computer.getCount());
    log.add("Flywieghts: " + FlyWieghtFactory.getCount());

    log.show();
}

run();