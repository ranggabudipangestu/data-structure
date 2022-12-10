class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) { //menambahkan item di akhir
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }

  prepend(value) { //menambahkan item di awal
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this
    }

    if(index >= this.length) {
      this.append(value)
      return this
    }

    const newNode = new Node(value)
    const leader = this._traverseToIndex(index-1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length += 1
    return this
  }

  remove(index){
    if(index === 0){
      this.head = this.head.next
      return this
    }
    let removeIndex = index >= this.length ? this.length -1 : index
    const leader = this._traverseToIndex(removeIndex-1)
    const deletedItem = leader.next
    leader.next = deletedItem.next
    this.length--
    return this
  }

  _traverseToIndex(index){
    let counter = 0
    let currentNode = this.head
    while(counter !== index){
      if(currentNode.next){
        currentNode = currentNode.next
      }
      
      counter++
    }
    return currentNode
  }

  printList() {
    const arr = []
    let currentNode = this.head
    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }

    return arr
  }

}


const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
// myLinkedList.insert(1,25)
myLinkedList.prepend(25)
console.log(myLinkedList.printList())
// myLinkedList.remove(10)
// myLinkedList.remove(3)
myLinkedList.remove(0)
myLinkedList.remove(1)
console.log(myLinkedList.printList())