var BinarySearchTree = function(value) {

  var tree = Object.create(binaryTreePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryTreePrototype = {};

//accepts a value and places it in the tree in the correct position.
binaryTreePrototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
binaryTreePrototype.contains = function(target) {
  var isFound = false;

  if (this.value === target) {
    isFound = true;

  } else if (target < this.value) {
    if (this.left) {
      if (this.left.contains(target)) {
        isFound = true;
      }
    }
  } else if (target > this.value) {
    if (this.right) {
      if (this.right.contains(target)) {
        isFound = true;
      }
    }
  }
  return isFound;
};

//accepts a callback and executes it on every value contained in the tree.
binaryTreePrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb)
  }
  if (this.right) {
    this.right.depthFirstLog(cb)
  }
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

 insert: O(1);
 contains: O(log n)
 depthFirstLog: O(n)
 */
