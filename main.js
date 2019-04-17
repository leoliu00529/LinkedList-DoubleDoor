/*
Zihan Liu
DoubleDoor Technologies Technical Problem 1
 */


/*
A simple singly linked list without any fancy features (i.e dummy nodes, previous node....)
 */
let Node = class {
    constructor(value, next) {
        this.val = value;
        this.next = next;
    }
};

/*
The linked list class. This class contains some utility function, for example adding a node to the head / tail,
returning the size of the linked list and to remove a node from the linked list.
 */
let LinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    returnSize() {
        return this.size;
    }
    addNodeToHead(value) {
        const nodeToAdd = new Node(value, this.head);
        if (this.head) {
            nodeToAdd.nextNode = this.head;
        }
        else {
            this.tail = nodeToAdd;
        }
        this.head = nodeToAdd;
        this.size ++;
    }
    addNodeToTail(value) {
        const nodeToAdd = new Node(value, null);
        if (this.tail) {
            this.tail.next = nodeToAdd;
        }
        // make sure it is ok to first call addNodeToTail when the linked list is empty
        else {
            this.head = nodeToAdd
        }
        this.tail = nodeToAdd;
        this.size++;
    }
    //if the node with specified value exists, delete it. Else, does nothing. Only delete the first-occurrence
    deleteNode(value) {
        //if the head is the node we want to delete
        let ptr = this.head;
        if (ptr && ptr.val === value) {
            this.head = ptr.next;
            if (this.size === 1) {
                this.tail = null;
            }
            this.size --;
            return;
        }
        //if the node is anywhere but the head
        while (ptr.next) {
            if (ptr.next.val === value) {
                if (ptr.next.next) {
                    ptr.next = ptr.next.next;
                }
                else {
                    ptr.next = null;
                    this.tail = ptr;
                }
                this.size --;
                return;
            }
            ptr = ptr.next;
        }
    }
};


/*
Some simple tester
 */

myList = new LinkedList();
myList.addNodeToHead("My name is ");
myList.addNodeToTail("Zihan ");
myList.addNodeToTail("Liu ");
myList.addNodeToTail("Thank ");
myList.addNodeToTail("You. ");
console.log(myList.returnSize());
console.log(myList);
myList.deleteNode("You. ")
myList.deleteNode("Thank ")
console.log(myList.returnSize());
console.log(myList);