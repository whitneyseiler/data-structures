var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null; // where all values are lower than the current value
  tree.right = null; //all values are higher than the current value
  tree.children = [];
  _.extend(tree, treeMethods);

  return tree;
};

var treeMethods = {};

//accepts a value and places it in the tree in the correct position.
treeMethods.addChild = function(value) {
// if first tree
  // add somehow
//else go to sort conditions
// console.log(value);
// console.log(this.value);

  if (this.children.length > 2) {
    if (this.value > value) {
      this.left = BinarySearchTree(value);
      tree.children.push(BinarySearchTree(value))
    } else {
      this.right = BinarySearchTree(value);
    }

};

//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
treeMethods.contains = function(target) {

};

//accepts a callback and executes it on every value contained in the tree.
treeMethods.depthFirstLog = function(cb) {

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
