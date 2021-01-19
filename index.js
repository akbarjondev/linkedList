class Node {

	data
	pointer

	constructor(data) {
		this.data = data
		this.pointer = null
	}
}

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
		let counter = 1

		while(this.head.pointer) {
			this.head.pointer = this.head.pointer.pointer
			counter++
		}

		return counter
	}
}

const ll = new LinkedList()

ll.insert('A')
ll.insert('B')
ll.insert('C')
ll.insert('E')
ll.insert('F')

console.log(ll.size())
