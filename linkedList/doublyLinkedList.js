class NodeList {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) { //menambahkan item di akhir
    const newNode = new NodeList(value)
    this.tail.next = newNode
    this.tail = newNode
    newNode.prev = this.tail
    this.length += 1
    return this
  }

  prepend(value) { //menambahkan item di awal
    const newNode = new NodeList(value)
    newNode.next = this.head
    this.head.prev = newNode
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

    //CONTOH DATA : [1,10, 5, 16]
    //INSERT KE INDEX 1, VALUE 25
    const newNode = new NodeList(value) //value yg diinsert 25
    const leader = this._traverseToIndex(index-1) // ambil data value sebelah kiri(VALUE: 1)
    const follower = leader.next // ambil data value sebelah kanan(VALUE: 10)
    leader.next = newNode //pointer next dari value sebelah kiri(1) adalah value yang diinsert(VALUE NEXT: 25)
    newNode.prev = leader //pointer prev dari value yg diinsert adalah value sebelah kiri(VALUE PREV: 1)
    newNode.next = follower //pointer next dari value yg diinsert adalah value sebelah kanan(VALUE NEXT: 10)
    follower.prev = newNode //pointer prev dari value sebelah kanan(10) adalah value yang diinsert(25)
    this.length += 1

    return this
  }

  remove(index){
    if(index === 0){
      this.head = this.head.next
      return this
    }

    //CONTOH DATA : [1, 25, 10, 5, 16]
    //INSERT KE INDEX 1, VALUE 25
    let removeIndex = index >= this.length ? this.length -1 : index
    const leader = this._traverseToIndex(removeIndex-1) //ambil value dari sebelah kiri index yg dihapus(VALUE: 1)
    
    const deletedItem = leader.next //ambil value next dari leader(VALUE YANG DIAMBIL: 25)
    leader.next = deletedItem.next //set nilai next leader, ambil dari next deleted Item
    
    this.length--
    return this
  }

  reverse(){
    if(!this.head.next){
      return this.head
    }

    //[1, 2, 3]
    let first = this.head //1
    this.tail = first //1
    let second = first.next //2

    while(second){
      
      // console.log("test 1", first, 'test 2', second, 'test 3', second.next)
      let temp = second.next //3
      second.next = first //third = 1
      first = second //first = 2
      second = temp //second = 3

      // PERULANGAN PERTAMA
      // temp = second.next //3
      // second.next = first //third = 1
      // first = second //first = 2
      // second = temp //second = 3
      //[2,3,1]
      
      // PERULANGAN KEDUA
      // temp = second.next // null
      // second.next = first // 2
      // first = second // 3
      // second = temp // null
      // PERULANGAN BERHENTI DISINI KETIKA SECOND = NULL

    }
    //[3, 2, 1]
    this.head.next = null
    this.head = first
    // console.log(this)

    return this


  }

  _traverseToIndex(index){
    let counter = 0
    let currentNode = this.head
    while(counter !== index){
      currentNode = currentNode.next
      
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


const myLinkedList = new DoublyLinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
// myLinkedList.prepend(1)
// console.log(myLinkedList)
// console.log(myLinkedList.printList())
// myLinkedList.insert(1,25)
// myLinkedList.prepend(25)
console.log(myLinkedList.printList())
// myLinkedList.remove(10)
// myLinkedList.remove(3)
// myLinkedList.remove(0)
// myLinkedList.remove(1)
// console.log(myLinkedList.printList())

myLinkedList.reverse()
console.log(myLinkedList.printList())