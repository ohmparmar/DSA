class LinkedList {
    constructor(headValue) {
        this.head = {
            value: headValue,
            next: null
        }
        this.tail = this.head // as initially head will be the only node . therefore head=tail
        this.length = 1
    }
    // value -> 10
    // next -> null



    append(value) {
        let newNode = {
            value: value,
            next: null
        }
        this.tail['next'] = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        let newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
            return
        }
        if (index === 0) {
            this.prepend(value)
            return
        }
        let preceeding_node = this.traverseToIndex(index - 1)
        let succedding_node = preceeding_node.next

        const newNode = {
            value: value,
            next: null
        }
        preceeding_node.next = newNode
        newNode.next = succedding_node
        this.length++
    }
    remove(index) {
        if (index === 0) {
            let first_node = this.head.next
            this.head = first_node
            this.length--
            return
        }

        let preceeding_node = this.traverseToIndex(index - 1)
        let node_to_be_deleted = preceeding_node.next
        preceeding_node.next = node_to_be_deleted.next
        if (index === this.length - 1) {
            this.tail = preceeding_node
        }
        this.length--

    }
    traverseToIndex(index) {
        let current_node = this.head
        let counter = 0

        while (counter !== index) {
            current_node = current_node.next
            counter++
        }
        return current_node

    }

    printLinkedList() {
        let currentNode = this.head;
        let result = '';

        while (currentNode !== null) {
            result += currentNode.value + '->';
            currentNode = currentNode.next;
        }

        result += 'null'; // Append "null" at the end
        console.log(result);
    }

}


console.log("--------------------------------------------------------")
let a = new LinkedList(12)
a.append(23)
a.append(34)
a.prepend(8)
a.insert(2, 10)
a.printLinkedList()
a.remove(0)
a.printLinkedList()
a.remove(a.length - 1)
a.printLinkedList()
console.log(a)
console.log("--------------------------------------------------------")