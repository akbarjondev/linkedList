class Array {

	#from
	#to
	#squence

	constructor(from, to) {
		this.#from = from
		this.#to = to
	}

	// iterable protocol
	[Symbol.iterator]() {
		let to = this.#to
		let from = this.#from

		// must return object
		return {
			next: function() {
				return {
					value: from++,
					done: to < from
				}
			}
		}
	}
}

module.exports.Array = Array
