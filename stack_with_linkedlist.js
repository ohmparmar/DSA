class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}



class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek() {
        return this.top.data
    }

    push(data) {
        let newNode = new Node(data)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }
    pop() {
        if (this.length == 0) {
            console.log("Stack underflow error")
            return null
        }
        console.log("outside");
        let popedValue = this.data
        this.top = this.top.next
        this.length--
        return popedValue
    }

    print_stack() {
        let current_node = this.top
        let stack = 'top->'
        while (current_node) {
            stack += current_node.data + '->'
            current_node = current_node.next
        }
        stack += " end"
        console.log(stack)
    }
}


let mystack = new Stack()
mystack.push(3)
mystack.push(7)
mystack.push(5)
console.log(mystack.peek())
mystack.print_stack()
mystack.pop()
mystack.pop()
mystack.pop()
mystack.pop()
mystack.pop()
mystack.pop()
mystack.print_stack()
