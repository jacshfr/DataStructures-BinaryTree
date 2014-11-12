'use strict';

function Node(data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = function() {
    return this.data;
  };
}

var BST = function() {
  this.root = null;
};

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.show() + '');
    this.inOrder(node.right);
  }
};

BST.prototype.preOrder = function(node) {
  if (node !== null) {
    console.log(node.show() + ' ');
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};

BST.prototype.postOrder = function(node) {
  if (node !== null) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.show() + ' ');
  }
};

BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

BST.prototype.find = function(data) {
  var current = this.root;
  while (current && current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current;
};

BST.prototype.remove = function(data) {
  this.removeNode(this.root, data);
};

BST.prototype.removeNode = function(node, data) {
  if (node === null) {
    return null;
  }
  if (data == node.data) {
// node has no children
    if (node.left === null && node.right === null) {
      return null;
    }
          // node has no left child
    if (node.left === null) {
      return node.right;
    }
          // node has no right child
    if (node.right === null) {
      return node.left;
    }
          // node has two children
    var tempNode = this.getMin(node.right);
    node.data = tempNode.data;
    node.right = this.removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = this.removeNode(node.left, data);
    return node;
  } else {
    node.right = this.removeNode(node.right, data);
    return node;
  }
};
BST.prototype.update = function(data) {
  var grade = this.find(data);
  // console.log(grade.count);
  return grade.count++;
};

BST.prototype.counting = function() {
  var total = 0;
  var counter = function(node) {
    if (node !== null) {
      total++;
      counter(node.left);
      counter(node.right);
    }
  };
  counter(this.root);
  return total;
};

BST.prototype.edges = function() {
  var total = 0;
  var counter = function(node) {
    if (node.left !== null) {
      total++;
      counter(node.left);
    }
    if (node.right !== null) {
      total++;
      counter(node.right);
    }
  };
  counter(this.root);
  return total;
};

// var nums = new BST();

// nums.insert(23);
// nums.insert(45);
// nums.insert(16);
// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
// // console.log('inorder traversal: ');
// console.log(nums.edges());

module.exports = BST;
