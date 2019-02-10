'use strict';
// helper functions for findMatrixMiddle
const midIndex = (arr = []) => {
    let a, b;
 
  if (arr.length % 2 === 0) {
    a = Math.floor((arr.length / 2) - 1);
    b = Math.floor((arr.length / 2));
    return arr[a] > arr[b] ? a : b;
  }
  return Math.floor(arr.length / 2);
}

const midValue = (arr = []) => {
    let a, b;
    
  if (arr.length % 2 === 0) {
    a = arr[Math.floor((arr.length / 2) - 1)];
    b = arr[Math.floor((arr.length / 2))];
    return a > b ? a : b;
  }
  return arr[Math.floor(arr.length / 2)];
}

// determine square closest to middle with highest carrot count
const findMatrixMiddle = matrix => {
  let rowAIndex, rowBIndex, innerRowIndex, index;
  
  if (matrix.length === 1) {
    return {
      rowIndex: 0, 
      index: midIndex(matrix[0]), 
      value: matrix[0][midIndex(matrix[0])]
    }
  }
  
  // if matrix is even number of rows
  if (matrix.length % 2 === 0) {
    rowAIndex = (matrix.length / 2) - 1;
    rowBIndex = matrix.length / 2;
    
    const a = {
      rowIndex: rowAIndex, 
      index: midIndex(matrix[rowAIndex]), 
      value: midValue(matrix[rowAIndex])
    }
    const b = {
      rowIndex: rowBIndex, 
      index: midIndex(matrix[rowBIndex]), 
      value: midValue(matrix[rowBIndex])
    }
    // compare to return the larger carrot count
    return a.value > b.value ? a : b;

  // if matrix is odd number of rows
  } else {
    innerRowIndex = Math.floor(matrix.length / 2);
    index = midIndex(matrix[innerRowIndex]);
    
    return {
      rowIndex: innerRowIndex, 
      index: index, 
      value: matrix[innerRowIndex][index],
    }
  }
}

const hungryRabbit = (matrix = [], currPos = {}, totalValue = 0) => {
  let nextPos = null;
  let adjacents = [];

  if (!totalValue) {
    currPos = findMatrixMiddle(matrix);
  }
  
  const currPosIndex = currPos.index;
  const currPosRowIndex = currPos.rowIndex;
  const currPosRow = matrix[currPosRowIndex];

  totalValue = totalValue || currPos.value;
  
  // top
  if (matrix[currPosRowIndex - 1]) {
    adjacents.push({
      value: matrix[currPosRowIndex - 1][currPosIndex],
      rowIndex: currPosRowIndex - 1, 
      index: currPosIndex
    });
  }

  // left 
  if (currPosRow[currPosIndex - 1]) {
    adjacents.push({
      value: currPosRow[currPosIndex - 1],
      rowIndex: currPosRowIndex,
      index: currPosIndex - 1
    });
  }

  // bottom
  if (matrix[currPosRowIndex + 1]) {
    adjacents.push({
      value: matrix[currPosRowIndex + 1][currPosIndex],
      rowIndex: currPosRowIndex + 1, 
      index: currPosIndex
    });
  }

  // right 
  if (currPosRow[currPosIndex + 1]) {
    adjacents.push({
      value: currPosRow[currPosIndex + 1],
      rowIndex: currPosRowIndex,
      index: currPosIndex + 1
    });
  }

  if (adjacents.length > 0) {
    //   determine next position to go to with most carrots
    let nextSquare = adjacents.reduce((acc, curr) => ( acc.value > curr.value ? acc : curr ));
  
    if (nextSquare.value > 0) {
      currPosRow[currPosIndex] = 0;
    //   change position
      currPos = { rowIndex: nextSquare.rowIndex, index: nextSquare.index };
      totalValue += nextSquare.value;
    //   keep eating
      return hungryRabbit(matrix, currPos, totalValue);
    } else {
        // no more carrots, go to sleep
      return totalValue;
    }
  } else {
    return totalValue;
  }
}

const a = hungryRabbit([[5, 7, 8, 6, 3],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]]);
console.log(a);

// spiral traversal of matrix
const input = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
    ];
const spiralTraverse = (input, result) => {
    if (input.length === 0) return result;
    
    result = result.concat(input.shift());
    input.forEach((rightEnd) => {
        result.push(rightEnd.pop());
    });
    result = result.concat(input.pop().reverse());
    let tmp = [];
    input.forEach(function(leftEnd) {    
        tmp.push(leftEnd.shift());
    });
    result = result.concat(tmp.reverse());
    
    return spiralTraverse(input, result);
}

const result = spiralTraverse(input, []);

console.log('result', result);

function BinaryTree () {
  this.root = null;
}

var last_logged;

function isBST (root) {

  if (root === null) { // base case
    return true;
  }
  
  // Verify and recurse left
  if (!isBST(root.left)) {
    return false;
  }

  // Verify the current node
  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }

  // Log the current data for debugging and update the last_logged
  console.log('Current Node : ', root.data);
  last_logged = root.data;

  // Verify and recurse left
  if (!isBST(root.right)) {
    return false;
  }

  return true;
}

// Create a Binary Tree as a sample input
var root = {
  data : 8,
  left : null,
  right : null
};
var n1 = {
  data : 10,
  left : null,
  right : null
};

var n2 = {
  data : 6,
  left : null,
  right : null
};

var BT = new BinaryTree();
BT.root = root;

// Create a Binary Search Tree (BST) and Verify  
BT.root.left = n2; 
BT.root.right = n1; 
console.log(isBST(BT.root)); // true

// Create a non-BST and Verify 
BT.root.left = n1; 
console.log(isBST(BT.root)); // false

const wishlist = (meDestinations, friends) => {
    let compareBuds = {};
    let counter = 0;
    let currBuddy = '';

    // shape our incoming strings so they are traversable
    meDestinations = meDestinations.split('\n').join(',').split(',');
    friends = friends.split('\n').join(',').split(',');

    for (let i = 0; i < friends.length; i++) {
        let possibleBuddies = ['U1', 'U2', 'U3', 'U4'];
        // each time we iterate over a new possibleBuddy, 
        // we reset the counter and store the current buddy
        if (possibleBuddies.includes(friends[i])) {
            currBuddy = friends[i];
            counter = 0;
        }
        // increase the counter each time there is a match
        if (meDestinations.includes(friends[i])) {
            counter++;
        }
        // store the buddy as a key in the compareBuds
        // and their count as the number of matches
        compareBuds[currBuddy] = counter;
    }
    
    // convert the hash into an array while also filtering for matches > 0,
    // sorting lowest to highest, then reverse to get the desired output
    let matches = Object.keys(compareBuds)
                        .filter(el => compareBuds[el] > 0)
                        .sort((a, b) => compareBuds[a] - compareBuds[b])
                        .reverse();
	return matches;
}

const str1 = "Amsterdam,Barcelona,London,Prague";

const str2 = "U1,Amsterdam,Barcelona,London,Prague\nU2,Shanghai,Hong Kong,Moscow,Sydney,Melbourne\nU3,London,Boston,Amsterdam,Madrid\nU4,Barcelona,Prague,London,Sydney,Moscow";

console.log(wishlist(str1, str2));
