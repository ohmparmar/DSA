class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get_length() {
        return this.length
    }

    get_element(index) {
        return this.data[index]
    }
    append(data) {
        this.data[this.length] = data
        this.length++
    }

    pop() {
        let element_to_be_removed = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return element_to_be_removed
    }

    delete(index) {
        let item_to_be_deleted = this.data[index]
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return item_to_be_deleted
    }

    toString() {
        let arrayValues = []
        for (let i = 0; i < this.length; i++) {
            arrayValues.push(this.data[i])
        }
        return `[${arrayValues.toString()}]`; // Convert array to a string representation
    }

}


let array = new MyArray()

array.append("my_data1")
array.append("my_data2")
array.append("my_data3")
array.append("my_data4")
console.log(array.toString())

array.delete(2)
console.log(array.toString())

array.pop()

console.log(array.toString())
console.log(array.get_length())
console.log(array.get_element(1))

