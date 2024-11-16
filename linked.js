class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addFirst(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    addLast(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    addAt(index, data) {
      if (index < 0 || index > this.size()) {
        console.error("Invalid index");
        return;
      }
      const newNode = new Node(data);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  
    removeTop() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
      let current = this.head;
      while (current.next && current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size()) {
        console.error("Invalid index");
        return;
      }
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    
    
    
}

reversePrint() { 
    let prev = null;
    let current = this.head;

    // Reverse the linked list
    while (current) {
        // Store the next node
        const nextNode = current.next;
        // Reverse the link
        current.next = prev;
        // Move prev and current one step forward
        prev = current;
        current = nextNode;
    }

    // At this point, prev is the new head of the reversed list
    this.head = prev;

    // Print the reversed linked list
    current = this.head; // Reset current to the new head
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

  
    // Add the isPalindrome function here
    isPalindrome() {
      let string1 = "";
      let string2 = "";
      let node = this.head;
  
      while (node != null) {
        // Use node.data instead of node.val
        string1 = `${string1}${node.data}`;
        string2 = `${node.data}${string2}`;
        node = node.next;
      }
      return string1 === string2;
    }


  }


  var addTwoNumbers=(l1,l2)=>{

  }
  
  // Testing the LinkedList and isPalindrome
  const linkedlist = new LinkedList();
  linkedlist.addFirst(1);
  linkedlist.addFirst(2);
  linkedlist.addFirst(3);
  linkedlist.addFirst(4);
  
  console.log("Linked List:");
  linkedlist.print();  // Expected output: 2 2 1 1
  console.log("reverse Linked List:");

  linkedlist.reversePrint()
  