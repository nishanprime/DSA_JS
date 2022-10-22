class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index <= 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traverse(index - 1); //this will return the node just before the insertion place
      const followerPointer = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = followerPointer;
      followerPointer.prev = newNode;
      this.length++;
    }
  }
  delete(index) {
    if (index >= this.length) {
      return this.delete(this.length - 1);
    }
    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    const neededNode = unwantedNode.next;
    leader.next = neededNode;
    neededNode.prev = leader;
    this.length--;
  }
}

const newLinkedList = new DoublyLinkedList(10);
newLinkedList.printList();
newLinkedList.append(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append(4);
newLinkedList.append(5);
newLinkedList.printList();

// console.log(newLinkedList.printList());

// newLinkedList.append(2);
// newLinkedList.append(2);
// console.log(newLinkedList);
newLinkedList.delete(2);
newLinkedList.printList();

// console.log(newLinkedList.printList());
