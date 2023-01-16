//LinkedLists are linear data structures.
//It contains nodes.Each node has it's value and a reference to it's next node.

//3 types of linked lists - singly,doubly, circular linked list.

//There are four basic operations of a linked list

// addLast
//removeLast
//addFirst
//removeFirst

function LinkedList() {
  var length = 0;
  var head = null;

  //Below func is a constructor function, like class , it creates objects.Here we are creating new nodes.
  //below ,"this" refers to the linkedList that would be created when constructor func. LinkedList() is invoked.
  var Node = function (element) {
    //this constructor func. is used inside LinkedList constructor func.
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  //func below adds a node in the end of the list
  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head; //we always start the search from the head
      while (currentNode.next) {
        // First loop - the head.next is not null.So it is truthy.
        //the loop iterated through the list and continue changing the currentNode untile it reaches the end
        currentNode = currentNode.next;
        //the loop stops when currentNode.next is null.
      }
      //then we add the last created node to the next of current node.
      currentNode.next = node;
    }
    length++;
  };

  //the func removes the node that matches the passed in element.
  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  //Returns true or false if empty or not
  this.isEmpty = function () {
    return length === 0;
  };

  //returns the index of the passed in element
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  //returns the element stored at the passed in  index
  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  };
}

var myLink = new LinkedList();
myLink.add("python");
myLink.add("javascript");
myLink.add("C++");

// console.log(myLink.size());
// console.log(myLink.indexOf("javascript"));
console.log(myLink.elementAt(0));
console.log(myLink);

// todo- Practice problem - If the head node of a linked list is given . Find the amount of nodes present in the linkedList
const countList = (head) => {
  let currentNode = head;
  let count = 1;
  while (currentNode.next != null) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
};
// console.log(countList(myLink.head()));
//* this count function we will use by default.
//it is available on geeks for geeks- https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/
const countList2 = (head) => {
  let temp = head;
  let counter = 0;
  while (temp) {
    counter++;
    temp = temp.next;
  }
  return counter;
};

// todo - Problem 19 - Remove nth from end of linkedList


const removeNthFromEnd = function (head, n) {
  const listSize = countList2(head);

  //define dummyNode;
  const dummyNode = new LinkedList();
  dummyNode.next = head;
  //Define pointers
  let previousPointer = dummyNode;
  let currentPointer = head;

  // Define a counter to keep track of how many node has been iterated.
  let count = 0;
  const nodeToDelete = listSize - n + 1;
  while (currentPointer) {
    count++;
    if (count == nodeToDelete) {
      previousPointer.next = currentPointer.next;
    }
    //both pointer moves one node at a time
    previousPointer = previousPointer.next;
    currentPointer = currentPointer.next;
  }
  console.log(head);
  return head;
};

const myList2 = new LinkedList()
myList2.add(1);
myList2.add(2);
myList2.add(3);
myList2.add(4);
myList2.add(5);
myList2.add(6);

console.log(removeNthFromEnd(myList2.head(),1));
