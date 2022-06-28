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
  var Node = function (element) {
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
        //the loop iterated through the list and continue changing the currentNode untile it reaches the end
        currentNode = currentNode.next;
      }
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
      length--
    };
    
    //Returns true or false if empty or not
    this.isEmpty = function () {
        return length === 0;
    }

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
    }

    //returns the element stored at the passed in  index
    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

}

var myLink = new LinkedList();
myLink.add("python");
myLink.add("javascript");


console.log(myLink.size());
console.log(myLink.indexOf('javascript'));
console.log(myLink.elementAt(0));