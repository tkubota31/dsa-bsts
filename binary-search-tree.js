class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root){
      this.root = new Node(val)
      return this
    }

    let current = this.root;
    while(current){
      if(current.val < val){
        if(current.right === null){
          current.right = new Node(val)
          return this;
        } else{
          current = current.right
        }
      } else if (current.val > val){
        if(current.left === null){
          current.left = new Node(val)
          return this
        } else{
          current = current.left
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    if(this.root ===null){
      this.root = new Node(val)
      return this
    }

    if(current.val < val) {
      if(current.right === null){
        current.right = new Node(val)
        return this;
      }
      return this.insertRecursively(val,current.right)
    }else{
      if(current.left ===null){
        current.left = new Node(val)
        return this;
      }
      return this.insertRecursively(val,current.left)
      }
    }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root

    while(current){
      if(current.val === val){
        return current;
      }
      current = val < current.val ? current.left : current.right
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(current.val === val) return current

    if(val < current.val){
      if(current.left === null){
        return undefined
      }
      return this.findRecursively(val, current.left);
      } else if (val > current.val){
        if(current.right ===null){
          return undefined
        }
        return this.findRecursively(val, current.right)
      }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let newArr = []
    let current = this.root
    function traverse(node){
      newArr.push(node.val)
      if(node.left) {traverse(node.left)};
      if(node.right){traverse(node.right)}
      }
      traverse(current)
      return newArr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let newArr = []
    let current = this.root
    function traverse(node){
      if(node.left) {traverse(node.left)};
      newArr.push(node.val)
      if(node.right){traverse(node.right)};
      }
      traverse(current)
      return newArr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let newArr = []
    let current = this.root
    function traverse(node){
      if(node.left) {traverse(node.left)};
      if(node.right){traverse(node.right)};
      newArr.push(node.val)
      }
      traverse(current)
      return newArr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let newArr =[]
    let queue =[]
    let current = this.root
    queue.push(current)

    while(queue.length){
      let current = queue.shift()
      newArr.push(current.val)

      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return newArr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
