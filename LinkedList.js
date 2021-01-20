// each Node
class Node {

	data
	pointer

	constructor(data) {
		this.data = data
		this.pointer = null
	}
}


// linkedList
class LinkedList {

	size = 0

	constructor() {
		this.head = null
	}


	insert(data) {
		const node = new Node(data)

		if(!this.head) {

			this.head = node
		
		} else {
			let tail = this.head
			
			while(tail.pointer) {

				tail = tail.pointer
			}

			tail.pointer = node
		}
		
		this.size++
	}


	size() {
		let counter = 0
		let node = this.head

		while(node) {
			counter++
			node = node.pointer
		}

		return counter
	}


	clear() {
		this.head = null		
	}

	
	find(data) {
		let currNode = this.head

		while(currNode) {
			
			if(currNode.data === data) {
				return currNode
			}

			currNode = currNode.pointer
		}
	}
	

	indexOf(data) {
		let index = 0
		let currNode = this.head

		while(currNode) {
			
			if(currNode.data === data) {
				return index
			}

			index++
			currNode = currNode.pointer
		}
	}
}

module.exports.LinkedList = LinkedList
