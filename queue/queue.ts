class LinkedlistNode{
  public value:any
  public next:any

  constructor(value:any){
    this.value = value
    this.next = null
  }
}

class Queue{
  private first: any
  private last: any
  private length: number
  private capacity:number 
  constructor(capacity: number){
    this.first = null
    this.last = this.first
    this.length = 0
    this.capacity = capacity
  }

  public peek(){
    return this.first
  }

  public enqueue(value:any){
    if(this.capacity === this.length){
      return 'Queue is full'
    }
    const newValue = new LinkedlistNode(value)
    if(this.length === 0){
      this.first = newValue
      this.last = this.first
    }else{
      this.last.next = newValue
      this.last = newValue
    }

    this.length ++
    return this

  }

  public dequeue(){
    if(!this.first){
      this.last = this.first
      return 'Empty'
    }
    this.first = this.first.next
    this.length --
    return this
  }

  public printList(){
    const arr:Array<any> = []
    let currentNode = this.first
    while(currentNode !== null){
      arr.push(currentNode.value)
      currentNode = currentNode.next
      
    }
    return arr
  }
}



const queue = new Queue(3)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.printList())
console.log(queue.enqueue(4))
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.dequeue())
console.log(queue.peek())
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

console.log(queue.printList())