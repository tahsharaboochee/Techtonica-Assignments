// BST's are just a collection of nodes that are linked together
// let's start by making the 'atom' of a binary search tree, a Node
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root || null;
  }
  
  
  insert(data) {
    let newNode = new Node(data);
    
    // if BST is empty, we want to make the new node the root
    if (this.root === null) {
      this.root = newNode;
    } else { // if BST is not empty, we want to find the right place to insert the node
      this.recursiveInsert(newNode, this.root);
    }
  }
  
  recursiveInsert(newNode, currentNode) {
    if (currentNode === null || newNode.data === currentNode.data) return; // BST's don't have duplicates
      if (newNode.data < currentNode.data) { // if newNode is smaller than current node we want to go to the left
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          this.recursiveInsert(newNode, currentNode.left);
        }
      }
      if (newNode.data > currentNode.data) { // if newNode is larger than current node we want to go to the right
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          this.recursiveInsert(newNode, currentNode.right);
        }
      }
  }
  
  search(data) { 
    // write a function that searches the binary tree and returns the node containing data
    if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(data < current.value){
                current = current.left;
            } else if(data > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
  }
  
  
  remove(data) {
    // write a function that does the opposite of insert
    // find the node with data (if it exists) and remove it from the tree
    const removeNode = (node, data) => {
      // if no node exists, return null
      if (!node) {
        return null;
      }
  
      // if they match, // REMOVE VALUE HERE
      if(data == node.value) {
        // the node is a leaf,
        if (!node.left && !node.right) {
           // delete the node
          return null;
        }
        
        // if there isn't a left child,
        if (!node.left) {
          // then replace node with right child
          return node.right;
        }
        
        // if there isn't a right child,
        if (!node.right) {
           // then replace node with left child
          return node.left;
        }
  
        // assigning right child node to temp
        let temp = node.right;
  
       // while there is a left child,
        while(!temp.left) {
          // traverse along left branches
          temp = temp.left;
        }
        
         // replace node value with temp value
        node.value = temp.value;
         // delete leaf
        node.right = removeNode(node.right, temp.value);  
       // if target value is lesser than node value,
      } else if (data < node.value) {
        // search and remove target in left subtree
        node.left = removeNode(node.left, data);
        // return updated node after removal
        return node;
  
      } else {// if target value is greater than node value
        // search and remove target in right subtree
        node.right = removeNode(node.right, data);
        // return updated node after removal
        return node;
      }
    }
    this.root = removeNode(this.root, data) 
  
  }
}

let root = new Node(5);
let bst = new BinarySearchTree(root);

bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
console.log(bst);

// The above code makes the following tree
//         5
//       /   \
//     3       7
//   /   \
//  1     4
