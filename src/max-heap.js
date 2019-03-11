const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null
		this.parentNodes = []
		this.__size = 0
	}

	push(data, priority) {
		let node = new Node(data, priority)

		this.insertNode(node)
		this.shiftNodeUp(node)

		this.__size += 1
	}

	pop() {
		this.__size -= 1
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
		return this.__size
	}

	isEmpty() {
		return this.__size ? false : true
	}

	clear() {
		this.root = null
		this.parentNodes = []
		this.__size = 0
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
		if (!node) return
		if (!node.left && !node.right) return

		let swapNode = node

		if (node.left && node.left.priority > swapNode.priority)
			swapNode = node.left

		if (node.right && node.right.priority > swapNode.priority)
			swapNode = node.right
		
		if (swapNode == node) return

		let currentNodeIndex = this.parentNodes.indexOf(node)
		let childNodeIndex = this.parentNodes.indexOf(swapNode)

		if (currentNodeIndex !== -1)
			this.parentNodes[currentNodeIndex] = swapNode

		if (childNodeIndex !== -1)
			this.parentNodes[childNodeIndex] = node

		swapNode.swapWithParent()
		this.shiftNodeDown(node)
		
		if (!swapNode.parent) this.root = swapNode
	}
}

module.exports = MaxHeap;
