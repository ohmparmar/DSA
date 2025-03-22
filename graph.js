class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (node in this.adjacentList) {
            return this
        } else {
            this.numberOfNodes++;
            this.adjacentList[node] = []
        }
    }
    addEdge(node1, node2) {
        if (node1 in this.adjacentList && node2 in this.adjacentList) {
            this.adjacentList[node1].push(node2)
            this.adjacentList[node2].push(node1)
        } else {
            return "bad request";
        }
    }

    traverse() {
        for (let key in this.adjacentList) {
            console.log(key, " -> ", this.adjacentList[key]);
        }
    }
}


const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.traverse();



