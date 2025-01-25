class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }
    #hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }


    set(key, value) {
        let address = this.#hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
    }

    get(key) {
        let address = this.#hash(key)
        console.log(address);
        let currentBucket = this.data[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        let keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    // console.log(this.data[i][0][0]);
                    for (let j = 0; j < this.data[i].length; j++) {

                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }
        return keysArray
    }
}


let a = new HashTable(2)
a.set("grapes", 1000)
a.set("grapee", 102)
console.log(a.get("grapes"))
console.log(a.data)
console.log(a.keys())
