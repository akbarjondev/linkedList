const { LinkedList } = require('./LinkedList')

const ll = new LinkedList()

ll.insert('A')
ll.insert('B')
ll.insert('C')
ll.insert('E')
ll.insert('F')
ll.insert('F')

console.log(ll.size())
