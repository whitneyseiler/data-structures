class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  enqueue(value) {
    this[this.count++] = value;
  }

  dequeue() {
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

  size() {
    return this.count;
  }
}
