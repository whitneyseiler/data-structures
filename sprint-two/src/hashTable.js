

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);//{}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // console.log(index);
  // console.log('index ', this._storage.get(index))
  this._storage.each(function(value) {
    // console.log('value ', value)
    if (value === this._storage.get(index)) {
      this._storage.splice(index, 1)
      // this._storage[this.storage].splice(indexOf(index), 1);
  
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
    ~constant or O(1)
 */


/*  
LOOKUP: 
1) run the key through the hashing function to get index
2) search that particular bucket to see if it exists. 
*/

// [ [{"3":4}], [{"2":3}, {"4":5}] ] 