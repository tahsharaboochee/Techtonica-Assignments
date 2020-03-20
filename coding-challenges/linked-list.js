/** 
 * ]inked list 
 * linked list is a collection of nodes
 * linked list do not have indices
 * linked list are connected via nodes with a next pointer
 * Random access is not allowed
 * 
 */

 //linked list stores a piece of data called val
 //it references to the next node - next
 class Node{
  constructor(val){
    this.val - val;
    this.next - null;
   }
 }

 class LinkedList{
   constructor(){
     this.length = 0; 
     this.head = null;
     this.tail = null;
   }

   push(val){
     //create a new node using the val passed to the function
     let newNode = new Node(val)
     // if there is no head property on the list set the head and tail tobe the newly created node
   if(!this.head){
     this.head = newNode; 
     this.tail = this.head; 
     //else set the next property on the tail to be the new node and set the tail property on the list to be the newly created node 
   }else {
     //increment and set the tail property on the list to be the newly created node
     this.tail.next = newNode;
     this.tail = newNode;
   } 
   //increment the length by one
   this.length++
   return this;
   
   }

   //removing a node from the end of the lInked list
   pop(){
     // if there are no nodes in the list, return undefined
     if(!this.head) return undefined;
     // loop through the list until you reach the tail 
     let current = this.head; 
     let newTail = current;
     while (current.next){
       newTail = current; 
       current = current.next; 
     } 
     // set the tail to be the 2nd to last node
     this.tail = newTail; 
     //set the next property of the 2nd to last node to be null 
     this.tail.next = null;
     // decrement the length of the list by 1
     this.length--;
     //check if list is empty or head === to tail
     if (this.length === 0){
       this.head = null; 
       this.tail = null; 
     }
     //return the value of the node removed
     return current; 
   }

   //remove a node from beginning of linked list
   shift(){
     // if there are no nodes return undefined
     if(!this.head) return undefined;
     //store the cur head property in a var
     let currentHead = this.head; 
     //set the head property to be the current head's next property
     this.head = currentHead.next; 
     // decrement the length by 1
     this.length--;
      //check if list is empty or head === to tail
      if (this.length === 0){
       this.tail = null; 
     }
     //return the valu of the node removed
     return currentHead; 
   }

   // add a node from beginning of linked list
   unshift(val){
     //create a new node using the value passed to thr function 
     let newNode = new Node(val);
     //if there is no head proprty on the list, set the head and tail to be the newly created node
     if(!this.head){
       this.head = newNode; 
       this.tail = this.head; 
       //else set the newly created node's next property to be the current head property on the list
     } else {
         newNode.next = this.head; 
         //set the head property on the list to be theat newly created node
         this.head = newNode
     }
     // increment the length of the list by 1 
     this.length++
     //return the linked list
     return this
   }

   //retrieve a node by it's position in the linked list
   get(val){
     // if the index < zero or index >= length of list return null 
     if (index < 0 || index >= this.length) return null; 
     //loop through the list until you reach the index and return the node at the specific index
     let counter = 0; 
     let currrent = this.head; 
     while(counter !== index) {
       current = currrent.next;
       counter++;
     }
     return current
   }

   //change the value of a node based on it's positon in the linked list
   set(index, vals){
     // use the get function to find the specific node
     let foundNode = this.get(index)
     //if the node is found, set the value of that node to be the val passed to the function and return true;
     if (foundNode){
       foundNode.val = val;
       return true; 
     }
     //if the node is not found, return false
     return false; 
   }

   //add a node to the linked list at a specific positon
   insert(index, val){
     // if the index < 0 or index > length return false 
     if(index < 0 || index > this.length) return false; 
     //create a new node
     let newNode = new Node(val)
     // prev node
     let prev = this.get(index - 1);
     //placement holder for the prev node
     let temp = prev.next;
     //if the index === length push a new node to the end of the list
     if (index === this.length){
       return this.push(newNode)
     }
     //if the index is 0 unshift a new node to the stat of the list
     if(index === 0) {
       return this.unshift(newNode)
       //else use the get access the node at the index -1
     } else {
       this.get(val)
     }
     //set the next property on that node to be the new node
     prev.next = newNode; 
     // set the next property on the new node to be the previous next 
     newNode.next = temp
     // increment the this.length
     this.length++
     // return true
     return true;
   }

 }

