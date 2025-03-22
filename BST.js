class Node {
    constructor(data) {
        this.right = null
        this.left = null
        this.data = data
    }
}


class BST {
    constructor() {
        this.root = null
        this.height = 0
    }

    insert(data) {
        let newNode = new Node(data)
        if (this.root == null) {
            this.root = newNode
            return this
        } else {
            let currentNode = this.root
            while (currentNode) {
                if (data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.right
                    }
                } else if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    console.log("this node already exists");
                    return
                }
            }

        }
    }
    lookup(search_value) {
        if (!this.root) return false;
        let currentNode = this.root
        while (currentNode) {
            if (search_value === currentNode.data) {
                return true
            } else if (search_value > currentNode.data) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return false;
    }
    // Get height of the BST
    getHeight(node) {
        if (node === null) return 0;
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                } else {
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

function traverse(node) {
    const tree = { value: node.data };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

let mybst = new BST()
mybst.insert(9)
mybst.insert(4)
mybst.insert(6)
mybst.insert(20)
mybst.insert(170)
mybst.insert(15)
mybst.insert(1)
console.log(mybst.lookup(70))
console.log(mybst.lookup(9))