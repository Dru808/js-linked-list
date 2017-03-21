/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){
  var head = null;
  var tail = null;




  function _getHead() {
    return head;
  }

  function _getTail() {
    return tail;
  }

  function _add(x) {
    var newNode = {
      value: x,
      next: null
    };

    if ( head === null && tail === null ) {
      head = newNode;
      tail = newNode;
      return newNode;
    }

  tail.next = newNode; //tail node is being linked to a newNode by assigning tail.next to value of newNode.
  tail = newNode;
}



function _get(n) {
  var index = 0;
  var currentNode = head;
  // console.log('current node ', currentNode);
  while (currentNode.next !== null) {
    if (n === index) {
      return currentNode;
    }
    // console.log('in while: ', index, currentNode.value);
    index += 1;
    currentNode = currentNode.next;

  }

  if (n !== index) {
    return false;
  }

  return currentNode;
}

function _remove(n) {

}

function _insert(x, n) {

}

return {
  getHead: _getHead,
  getTail: _getTail,
  add: _add,
  get: _get,
  remove: _remove,
  insert: _insert
};

}