class BSTNode {
  private left: any
  private right: any
  private value: any

  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }

}

class BinarySearchTree {
  private root: any
  constructor() {
    this.root = null
  }

  insert(value: any) {
    const newNode = new BSTNode(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root
    while (currentNode) {
      if (value > currentNode.value) {
        if(currentNode.value === value){
          return this
        }
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right

      } else if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      }
    }

  }
  lookup(value: any) {
    const data = this._traverseNode(this.root, value)
    if(!data) return [false, null] 
    return [true, data]
  }

  private _traverseNode(parentValue: any, value: any) {
    let currentNode = parentValue
    while (currentNode) {
      if(currentNode.value === value){
        return currentNode
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right

      } else if (currentNode.value > value) {
        currentNode = currentNode.left
      }
    } 
    
    return currentNode

  }

  getAllTree() {
    return this
  }

}

const binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)
binarySearchTree.insert(13)
binarySearchTree.insert(20)
binarySearchTree.insert(23)
binarySearchTree.insert(4)
binarySearchTree.insert(6)
binarySearchTree.insert(8)
binarySearchTree.insert(7)
binarySearchTree.insert(22)
binarySearchTree.insert(19)

const [lookup, data] = binarySearchTree.lookup(25)
console.log(lookup, data)

console.log(JSON.stringify(binarySearchTree.getAllTree()))