const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []
	}

	push(data, priority) {
		let node = new Node(data, priority)

		this.insertNode(node)
		this.shiftNodeUp(node)
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (!this.parentNodes.length)
			this.root = node
		else 
			this.parentNodes[0].appendChild(node)

		this.parentNodes.push(node)

		if (this.parentNodes[0].left && this.parentNodes[0].right)
			this.parentNodes.shift()
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
