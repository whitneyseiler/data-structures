

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (this.edges.hasOwnProperty(node)) {
    delete this.edges[this.edges[node]];
    delete this.edges[node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.edges[fromNode] === toNode || this.edges[toNode] === fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = toNode;
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode];
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // debugger;
  for (var key in this.storage) {
    cb(this.storage[key]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


/* 
.addNode() method that takes a new node and adds it to the graph

.contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph

.removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.

.addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph

.hasEdge() method that returns a boolean reflecting whether or not two nodes are connected

.removeEdge() method that removes the connection between two nodes

.forEachNode() method that traverses through the graph, calling a passed in function once on each node */


