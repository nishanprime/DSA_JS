class Node {
  constructor(value) {
    this.top = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.head;
  }
  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.head == this.bottom) {
      this.bottom = null;
    }
    this.head = this.head.next; //here we are moving the pointer of this.head to this.head.next so whatever was there in this.head earlier lost its reference and will get deleted as JS is garbage collector and will free memory if no reference is associated with it
    this.length--;
    return this;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.bottom = newNode;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
    }
    this.length++;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
