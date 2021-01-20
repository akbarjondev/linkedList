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
}

module.exports.LinkedList = LinkedList
