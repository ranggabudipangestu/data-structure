class LinkedListNode{
  private head: any
  private next: any
  constructor(value: any){
    this.head = value
    this.next = null
  }
}
class Stack{
  private top:any
  private bottom:any
  private length:number

  constructor(){
    this.top = null
    this.bottom = null
    this.length = 0
  }
  
  peek(){
    return this.top
    
  }
  push(value: any){
    const newNode = new LinkedListNode(value)
    
    if(this.length === 0){
      this.top = newNode
      this.bottom = this.top
    }else{
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length ++
    return this
  }
  pop(){
    this.top = this.top.next
    if(!this.top) this.bottom = null
    this.length --
    return this
  }
}

const stack = new Stack()

stack.push("data1")
stack.push("data2")
console.log(stack.push("data3"))
console.log('PEEK', stack.peek())
console.log("pop1",stack.pop())
console.log("pop2",stack.pop())
console.log("pop3",stack.pop())
console.log(stack.peek())