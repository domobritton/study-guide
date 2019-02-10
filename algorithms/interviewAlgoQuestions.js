'use strict';

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
