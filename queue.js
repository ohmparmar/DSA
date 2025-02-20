class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.length = 0
        this.first = null
        this.last = null
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;  // Link the current last node to the new node
            this.last = newNode;       // Update last to the new node
        }
        this.length++;
    }
    peek() {
        console.log(this.first.data);

        return this.first.data
    }
    dequeue() {
        let deleted_data = this.first.data
        this.first = this.first.next
        this.length--
        return deleted_data
    }

    print_queue() {
        let current = this.first;
        let queueStr = "Front -> ";
        while (current) {
            queueStr += current.data + " -> ";
            current = current.next;
        }
        queueStr += "Back";
        console.log(queueStr);
    }
}



let myqueue = new Queue()
myqueue.enqueue(3)
myqueue.enqueue(7)
myqueue.enqueue(11)
myqueue.enqueue(12)
myqueue.print_queue()
myqueue.dequeue()
myqueue.print_queue()
myqueue.peek()
