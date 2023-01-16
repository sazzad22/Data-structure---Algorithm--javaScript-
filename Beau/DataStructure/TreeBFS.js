// A tree can be traversed using 2 algorithms
// Depth first search(DFS) and Breath first search
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f
//in breadth first algorithm we will go through each node in breath first order. > a,b,c,d,e,f
//for implementation we use queue.Every node gets out of the queue, we process it (here we add it to the result) and see it has any left node. If so ,then add the node to the queue. Then check it it has a right node. If so , we add it to the right array.

function bfs(root) {
    //define queue
    const queue = [root];
    const res = [];
    while (queue.length > 0) {
        const curr = queue.shift();
        res.push(curr.val);
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
        }

    }
    return res;
}
// console.log(bfs(a));//["a","b","c","d","e","f"]


//todo Problem 1 - Write a function bfs(root,target) that will return true if the target value exists in the tree ,otherwise false
function bfsDoExist(root,target) {
    //define queue 
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr.val == target) {
            return true;
        }
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right != null) {
            queue.push(curr.right);
        }
    }
    return false;
}
// console.log(bfsDoExist(a, 'e')) //true;

// todo Problem - 635 : Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

const x = new Node(1);
const y = new Node(2);
const z = new Node(3);


x.left = y;
x.right = z;
//   1
//  / \
// 2   3

var averageOfLevels = function(root) {
    const res = [];
    const q = [root];
    while (q[0]) {
        let qSize = q.length;
        let rowAverage = 0;
        let count = 0;
        for(let i =0; i<qSize ; i++){
            let curr = q.shift();
            rowAverage += curr.val; 
            count++;
            if(curr.left){
                q.push(curr.left);
            }
            if(curr.right){
                q.push(curr.right);
            }
            
        }
        rowAverage = rowAverage / count;
        res.push(rowAverage);
    }
    return res;
};

console.log(averageOfLevels(x))