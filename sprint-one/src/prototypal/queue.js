var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.count =  0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count++] = value;
  },

  dequeue: function() {
    if (this.count > 0) {
      this.count--
    }
    var pop = this[0];
    for (var i = 0; i < this.count; i++) {
      this[i] = this[i+1];
    }
    delete this[this.count];
    return pop;
  },

  size: function() {
    return this.count;
  }

};
