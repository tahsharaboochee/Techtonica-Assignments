
class Node {
  constructor(el){
    this.el = el;
     this.next = null;
  }
}
class Stack{
  constructor(){
    this.first = null;
    this.last = null;
  this.top=0; //this.top refers to the index of an array. I assigned the value to 0 to allow to you to push the first value to the array.Then you can increment it after it pushed to the array.
  }
  
  // add push method here 
   push(el){
     //create a new node with the el
     let newNode = new Node(el)
     //if there are no nodes in the stack, set the first and last element to be the newly created node
    if(!this.first){
      this.first = newNode; 
      this.last = newNode
    } else {
      // create a var that stores the current first element on the stack
      let temp = this.first; 
      //reset the first el to be the newly created node
      this.first = newNode; 
      //set the next el on the node to be the previously created variable
      this.first.next = temp
    }
       // increment  the size of the stack by 1
     return ++this.top
   }
   
  // add isEmpty method here
   isEmpty(){
   if(this.first) return true
   else return false; 
   }
   // add pop method 
   pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  } 
}
  
  
var stack = new Stack();
  console.log(stack.isEmpty())