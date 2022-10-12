class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let index = 0; index < currentBucket.length; index++) {
        if (currentBucket[index][0] === key) {
          return currentBucket[index][1];
        }
      }
    }
    return undefined;
  }
  print() {
    console.log(this.data);
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            const element = this.data[i][j];
            keysArray.push(element[0]);
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
}
const hashOne = new HashTable(200);
hashOne.set('grapes', 35);
hashOne.set('grapes', 45);
// hashOne.set('grapes2', 35);
// hashOne.set('apples', 54);
// hashOne.print();

// console.log(hel);
hashOne.print();
console.log(hashOne.keys());
class LinkedList{
  constructor(value){
    this.head={
      value,
      next:null
    }
  }
}
const myLinkedList=new LinkedList(10)