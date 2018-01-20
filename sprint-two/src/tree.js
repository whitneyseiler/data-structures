var Tree = function(value) {
  var newTree = {};
  newTree.count = 0;
  newTree.value = value;
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var currentTree = this;
  var containsValue = false;

  var findValue = function(obj) {
    if (obj.value === target) {
      containsValue = true;
      return containsValue;
    } else {
      for (var i = 0; i < obj.children.length; i++) {
        findValue(obj.children[i]);
      }
    }
  };
  findValue(currentTree);
  return containsValue;
};

