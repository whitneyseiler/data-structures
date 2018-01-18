var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.count++] = value;
}

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }
  var deq = this[0];
  for (var i = 0; i < this.count; i++) {
    this[i] = this[i+1];
  }
  delete this[this.count];
  return deq;
}

Queue.prototype.size = function() {
  return this.count;
}
