class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
      const pointerUpfront = leader.next;
      leader.next = newNode;
      newNode.next = pointerUpfront;
      this.length++;
    }
  }
  // pop() {
  //   console.log(this.tail);
  //   this.tail.next = null;
  //   this.tail = null;
  // }
  delete(index) {
    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

const newLinkedList = new LinkedList(10);
newLinkedList.append(20);
newLinkedList.append(30);
newLinkedList.append(40);
newLinkedList.insert(2, 35);
newLinkedList.printList();
newLinkedList.delete(2);
newLinkedList.printList();
