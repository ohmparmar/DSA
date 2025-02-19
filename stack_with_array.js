class Stack {
    constructor() {
        this.arr = []
    }

    push(data) {
        this.arr.push(data)
    }

    pop() {
        let popped_item = this.arr[this.arr.length - 1]
        this.arr.pop()
        return popped_item
    }
    peek() {
        return this.arr[this.arr.length - 1]
    }


    print_stack() {
        let stack = 'top->'
        for (let i = this.arr.length - 1; i >= 0; i--) {
            stack += this.arr[i] + '->'
        }
        stack += " end"
        console.log(stack)
    }
}


let mystack = new Stack()
mystack.push(3)
mystack.push(7)
mystack.push(5)
mystack.print_stack()
mystack.pop()
console.log(mystack.peek())

mystack.print_stack()
