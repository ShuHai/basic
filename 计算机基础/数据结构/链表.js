function Node(element) {
    this.element = element;
    this.next = null;
}

function List() {
  this.head = new Node("head");
}

List.prototype = {
  find: function(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
  },
  insert: function(newElement,item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    if(current == null) {
      return console.log("can't find the item");
    }
    newNode.next = current.next;
    current.next = newNode;
  },
  remove: function(item) {
    var prevNode = this.findPrevious(item);
    if(prevNode.next != null) {
      prevNode.next = prevNode.next.next;
    }
  },
  findPrevious: function(item) {
    var currNode = this.head;
    while(currNode.next != null && currNode.next.element != item) {
        currNode = currNode.next;
    }
    return currNode;
  },
  edit: function(item,newItem){
    var element= this.find(item)
    element.element=newItem
  },
  display: function() {
    var current = this.head;
    while(current.next != null) {
        console.log(current.next.element);
        current = current.next;
    }
  }
}