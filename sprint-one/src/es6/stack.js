class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  push(value){
    this[this.count++] = value;
  }

  pop(){
    if (this.count > 0) {
      this.count--
    }
    var pop = this[this.count];
    delete this[this.count];
    return pop;
  }

  size(){
    return this.count;
  }

}
