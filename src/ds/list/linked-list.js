export class Item {
  
  constructor(value, next=null, prev=null){
    this._value = value;
    this._next = next;
    this._prev = prev;
  }

  getNext() {
    return this._next
  }

  setNext(item) {
    this._next = item
    return this
  }

  getPrev(){
    return this._prev
  }

  setPrev(item) {
    this._prev = item
    return this
  }

  getValue(){
    return this._value
  }

  setValue(val){
    this._value = val
    return this
  }

  hasNext(){
    return this._next !== null
  }

  hasPrev() {
    return this._prev != null
  }

}

export class LinkedList {

  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  head() {
    return this._head
  }

  tail() {
    return this._tail
  }

  length() {
    return this._length
  }

  append(value){
    const item = new Item(value)
    if(this._head === null) {
      this._head = item;
    } else {
      item.setPrev(this._tail)
      this._tail.setNext(item);
    }
    this._tail = item;
    this._length++;
    return this;
  }

  push(value) {
    return this.append(value);
  }

  prepend(value) {
    const item = new Item(value);
    if(this._head === null) {
      this._tail = item;
    } else {
      this._head.setPrev(item);
      item.setNext(this._head);
    }
    this._head = item;
    this._length++;
    return this;
  }

  shift(value){
    return this.prepend(value);
  }

  removeFromFront() {
    if(this._head === null) return undefined
    else {
      let item = this._head
      if(this._length === 1) {
        this._tail = null;
        this._head = null;
      }else {
        this._head = item.getNext();
        this._head.setPrev(null);
      }
      item.setNext(null);
      item.setPrev(null);

      this._length--
      return item;
    }
  }

  unshift(){
    return this.removeFromFront()
  }

  removeFromEnd(){
    if(this._head === null) return undefined
    else {
      let item = this._tail;
      if(this._length === 1) {
        this._head = null;
        this._tail = null;
      } else {
        this._tail = item.getPrev()
        this._tail.setNext(null);
      }
      item.setNext(null);
      item.setPrev(null);
      
      this._length--;
      return item;
    }
  } 

  pop() {
    return this.removeFromEnd();
  }

  getNode(index) {
     if(index < 0 || index >= this._length) return undefined
    let current = this._head;
    for(let i=0; i<index; i++) {
      current = current.getNext()
    }
    return current
  }
  
  get(index) {
    const node = this.getNode(index)
    if(node) return node.getValue();
    else undefined
  }

  removeAt(index) {
    let targetNode = this.getNode(index)
    let prevNode = targetNode.getPrev();
    let nextNode = targetNode.getNext();
    // one node
    if(prevNode == null && nextNode == null) {this._head = null; this._tail = null }
    // first node
    else if(prevNode == null) {this._head = nextNode; nextNode.setPrev(null)}
    //last node
    else if(nextNode == null) {this._tail = prevNode; prevNode.setNext(null)}
    // normal node
    else { prevNode.setNext(nextNode); nextNode.setPrev(prevNode) }
    
    return targetNode.getValue()
  }

}
