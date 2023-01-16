//todo Class inplementation of LinkedList

//creates a single node
class ListNode {
    constructor (data = 0,next = null) {
        this.data = data;
        this.next = next;
    }
}

//this create a linked list
class LinkedList {
    constructor(){
        this.head = null;
    }
    add(data){
        const node = new ListNode(data);
        //create pointer
        let current = this.head;
        if(this.head == null){
            this.head = node;
        } else{
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }
    //print a an array representation
    printList() {
        let curr = this.head;
        const list = [];
        while (curr != null) {
            list.push(curr.data);
            curr = curr.next
        }

        return list;
    }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2
// console.log(node1);
//creating a linked list obj using LinkedList class
const LinkedList1 = new LinkedList()
LinkedList1.add(1)
LinkedList1.add(2)


console.log(LinkedList1.head);
console.log(LinkedList1.printList());