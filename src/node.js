class Node {
	constructor(data, priority) {
		this.data = data
		this.priority = priority
		this.parent = null
		this.left = null
		this.right = null
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node
			this.left.parent = this
		}
		else if (!this.right) {
			this.right = node
			this.right.parent = this
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null
			this.left = null
		}
		else if (this.right == node) {
			this.right.parent = null
			this.right = null
		}
		else
			throw new Error('Object does not exist')
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
