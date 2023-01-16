 // trees 

/************************
types of data structure
*************************/
//https://www.mygreatlearning.com/blog/data-structure-tutorial-for-beginners/#:~:text=Data%20structure%20provides%20efficiency%2C%20reusability,data%20as%20fast%20as%20possible.

//? Trees are non- primitive non-linear data structure. Here the element or nodes are connected to each other with a parent child relationship - they branch out like a tree, from root to the leaves.

/* 
More on trees________________
*/
// https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

//*Binary Search Tree

//creates node
class Node{
    //left and right is null - only when node don't exist this class will be called to create a node
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//sets up the tree - sorts the data
class BST {
    constructor() {
        this.root = null;
    }
    
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
        } else {
            const searchTree = node => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data)
                    }else if (node.left !== null) {
                        return searchTree(node.left)//now node.left is passed - the func runs again holding the node.left as parent node to set  the passed data as the next node; 
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }

                } else {
                    return null;
                };
                
                
            }
            return searchTree(node)
        }
    }

    //finding minimum value in array - farthest left node is the smallest/min value
    findMin() {
        let current = this.root; //taking the root node as current
        while (current.left !== null) {
            current = current.left;
        }
        return current.data
    }
    //finds max value in the array - farthest right node
    findMax() {
        let current = this.root; //taking the root node as current
        while (current.right !== null) {
            current = current.right;
        }
        return current.data
    }

    //finds a data in the nodes
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null
            }
        }
        return current;
    }

    //if the passed in data present in the array or not(similar to the find method)
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    //removing a node
    remove(data) {
        const removeNode = function(node, data) {
          if (node == null) {
            return null;
          }
          if (data == node.data) {
            // node has no children 
            if (node.left == null && node.right == null) {
              return null;
            }
            // node has no left child 
            if (node.left == null) {
              return node.right;
            }
            // node has no right child 
            if (node.right == null) {
              return node.left;
            }
            // node has two children 
            var tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        }
        this.root = removeNode(this.root, data);
      }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst.isPresent(1));
console.log(bst.findMax());
console.log(bst.remove(7));
console.log(bst.findMax());
