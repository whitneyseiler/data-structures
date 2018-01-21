var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null; // where all values are lower than the current value
  newTree.right = null; //all values are higher than the current value
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//accepts a value and places it in the tree in the correct position.
treeMethods.insert = function() {

};

//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
treeMethods.contains = function() {

};

//accepts a callback and executes it on every value contained in the tree.
treeMethods.depthFirstLog = function() {

};

/*
node 1
node 2 -> bigger than 1 ? R : L
node 3 -> bigger than 2 ? R
  smaller than 2 & bigger than 1 ? RL
  smaller than 2 & smaller than 1 ? LL

RESTRUCTURING: middle value becomes top
  -> run above steps

/*
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

/*
 * Complexity: What is the time complexity of the above functions?
 */
