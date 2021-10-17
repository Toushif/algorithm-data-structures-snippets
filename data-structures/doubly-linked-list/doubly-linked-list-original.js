class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        (beforeNode.next = newNode), (newNode.prev = beforeNode);
        (newNode.next = afterNode), (afterNode.prev = newNode);
        this.length++;
        return true;
    }
    // Reverse and print copied from Doubly-lnked-list.js file
    reverse() {
        let currentNode = this.head;
        const tail = this.tail;

        while (currentNode) {
            [currentNode.next, currentNode.prev] = [
                currentNode.prev,
                currentNode.next,
            ];
            currentNode = currentNode.prev;
        }

        this.tail = this.head;
        this.head = tail;

        return this;
    }
    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }

        console.log(arr);
    }
}

var doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push("Harry")
// doublyLinkedList.push("Ron")
// doublyLinkedList.push("Hermione")
doublyLinkedList.push(5);
doublyLinkedList.push(10);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.tail.val); // 10
doublyLinkedList.pop();
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.next); // null
doublyLinkedList.unshift(20);
doublyLinkedList.unshift(40);
console.log(doublyLinkedList.head.val); // 40
console.log(doublyLinkedList.shift().val); // 40
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.get(1).val); // 5
doublyLinkedList.set(1, 1000);
console.log(doublyLinkedList.get(1).val); // 1000
doublyLinkedList.print(); // [ 20, 1000 ]
doublyLinkedList.insert(1, 25);
doublyLinkedList.insert(0, 30);
doublyLinkedList.insert(-1, 500);
doublyLinkedList.print(); // [ 30, 20, 25, 1000 ]
doublyLinkedList.reverse();
doublyLinkedList.print(); // [ 1000, 25, 20, 30 ]
// doublyLinkedList.rotate(-2);
// doublyLinkedList.print(); // [ 20, 30, 1000, 25 ]
