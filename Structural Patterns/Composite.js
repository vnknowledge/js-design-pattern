var Node = function(name) {
    this.children = [];
    this.name = name;
};

Node.prototype = {
    add: function(child) {
        this.children.push(child);
    },

    remove: function(child) {
        var length = this.children.length;
        for(var idx = 0; idx < length; ++idx) {
            if(this.children[idx] === child) {
                this.children.splice(idx, 1);
                return;
            }
        }
    },

    getChild: function(index) {
        return this.children[index];
    },

    hasChildren: function() {
        return this.children.length > 0;
    }
};

// recursively traverse a (sub)tree

function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);

    for(var idx = 0; idx < node.children.length; ++idx) {
        traverse(indent, node.getChild(idx));
    }
}

// logging helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {
    var tree = new Node("root");
    var left = new Node("left");
    var right = new Node("right");
    var leftleft = new Node("leftleft");
    var leftright = new Node("leftright");
    var rightleft = new Node("rightleft");
    var rightright = new Node("rightright");
    
    tree.add(left);
    tree.add(right);
    tree.remove(right);
    tree.add(right); // note: remove
    
    tree.add(leftleft);
    tree.add(leftright);
    
    tree.add(rightleft);
    tree.add(rightright);

    traverse(1, tree);

    log.show();
}

run();