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
		let root = this.root
		this.root = null

		if (root == this.parentNodes[0])
			this.parentNodes.shift()

		return root
	}

	restoreRootFromLastInsertedNode(detached) {
		if (!detached) return

		let rootLeftChild = detached.left
		let rootRightChild = detached.right

		if (!rootLeftChild && !rootRightChild) return

		let lastNode = this.parentNodes.pop()
		
		if (detached == lastNode.parent)
			this.parentNodes.unshift(lastNode)
		else 
			this.parentNodes.unshift(lastNode.parent)

		lastNode.remove()
		rootLeftChild.remove()
		rootRightChild.remove()

		lastNode.appendChild(rootLeftChild)
		lastNode.appendChild(rootRightChild)
		
		this.root = lastNode
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null
		this.parentNodes = []
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
		if (node.parent && node.priority > node.parent.priority) {
			let currentNodeIndex = this.parentNodes.indexOf(node)
			let parentNodeIndex = this.parentNodes.indexOf(node.parent)

			if (currentNodeIndex !== -1)
				this.parentNodes[currentNodeIndex] = node.parent

			if (parentNodeIndex !== -1)
				this.parentNodes[parentNodeIndex] = node

			node.swapWithParent()
			this.shiftNodeUp(node)
		}

		if (!node.parent) this.root = node
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
