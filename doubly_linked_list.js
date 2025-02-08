class DoublyLinkedList {
    constructor(headValue) {
        this.head = {
            value: headValue,
            next: null,
            previous: null
        }
        this.tail = this.head // as initially head will be the only node . therefore head=tail
        this.length = 1
    }



    append(value) {
        let newNode = {
            value: value,
            previous: this.tail,
            next: null
        }
        newNode.previous = this.tail
        this.tail['next'] = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        let newNode = {
            value: value,
            previous: null,
            next: null
        }
        newNode.next = this.head
        this.head.previous = newNode
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
            next: null,
            previous: null
        }
        preceeding_node.next = newNode
        newNode.next = succedding_node
        newNode.previous = preceeding_node
        succedding_node.previous = newNode

        this.length++
    }
    remove(index) {
        if (index === 0) {
            let old_head = this.head
            this.head = old_head.next
            old_head.next = null
            this.length--
            return
        }
        let preceeding_node = this.traverseToIndex(index - 1)
        let node_to_be_deleted = preceeding_node.next

        preceeding_node.next = node_to_be_deleted.next
        node_to_be_deleted.previous = null
        node_to_be_deleted.next.previous = preceeding_node
        node_to_be_deleted.next = null

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
            result += currentNode.value + (currentNode.next !== null ? '<->' : '->');
            currentNode = currentNode.next;
        }
        result += 'null'; // Append "null" at the end
        console.log(result);
    }

}


console.log("--------------------------------------------------------")
let a = new DoublyLinkedList(12)
a.append(23)
a.append(34)
a.prepend(8)
a.printLinkedList()
a.insert(2, 10)
a.printLinkedList()
a.remove(1)
a.printLinkedList()

console.log(a.head)
console.log(a.head.previous)
console.log("--------------------------------------------------------")