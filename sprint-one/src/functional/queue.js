var Queue = function() {
  var someInstance = {};
  var count = 0;
  var first = 0;
  var last = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    count ++;
    storage[last++] = value;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var dequeue = storage[first];
      delete storage[first++];
      count--;
      return dequeue;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
Queue();
