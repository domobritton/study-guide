function throttle(wait, onLast, onFirst, interval, timestamps) {
  let output = [];
  let cluster = [timestamps[0]];
  let prev = timestamps[0];
  let new_cluster = false;
  
  for(let i = 1; i < timestamps.length + 1; i++) {
    if (!new_cluster && i < timestamps.length && timestamps[i] - prev <= wait) {
      cluster.push(timestamps[i]);
    } else {
      new_cluster = false;
      
      if (onFirst) {
        output.push(cluster[0]);
      }
      
      if (interval > 0) {
        intervalEvents(cluster, interval, wait, onLast).forEach(element => { output.push(element) });
      }
      
      if (onLast) {
        output.push(cluster[cluster.length-1] + wait);
      }

      if (i < timestamps.length) {
        cluster = [timestamps[i]];
        new_cluster = true;
      }
    }
    prev = timestamps[i];
  }
  return output;
}

function intervalEvents(cluster, interval, wait, onLast) {
  let output = [];

  if (onLast) {
    for(let i = interval + cluster[0]; i < cluster[cluster.length-1] + wait; i += interval) {
      output.push(i);
    }
  } else {
    for(let i = interval + cluster[0]; i < cluster[cluster.length-1]; i += interval) {
      output.push(i);
    }
  }
  return output;
}

function score(dice) {
    // Fill me in!
    const triple = {
        1: 1000,
        6: 600,
        5: 500,
        4: 400,
        3: 300,
        2: 200
    }

    const single = {
        1: 100,
        5: 50,
        6: 0,
        4: 0,
        3: 0,
        2: 0
    }
   let values = {};
   let result = 0;
   for (let i = 0; i < dice.length; i++) {
       if (!values.hasOwnProperty(dice[i])) {
           values[dice[i]] = 1;
       } else {
           values[dice[i]] += 1;
       }
   }
   const keys = Object.keys(values);
   const value = Object.values(values);
   keys.forEach((num, idx) => {
       if (value[idx] === 1) {
           result += single[num];
       } else if (value[idx] === 3) {
           result += triple[num];
       }

   });
   return result;
}

const res = score([2, 4, 4, 5, 4]);
console.log(res);

function sockMerchant(n, ar) {
    let socks = 0;
    let same = {};
    for (let i = 0; i < n; i++) {
        if (!same.hasOwnProperty(ar[i])) {
            same[ar[i]] = 1;
        } else {
            same[ar[i]] += 1;
        }
    }
    let value = Object.values(same);
    console.log(value)
    console.log(Object.keys(same));
    value.forEach(val => {

      socks += Math.floor(val / 2);
    });
 
    return socks;
}

const res = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(res);

const res2 = sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]);
console.log(res2);

function countingValleys(n, s) {
    let valley = [];
    let elevation = 0;
    let count = 0;
    s.split('').forEach(step => {
        switch(step) {
            case 'U':
            elevation++;
            valley.push(elevation);
            break;
            case 'D':
            elevation--;
            valley.push(elevation);
            break;
        }
    
    });
    console.log(valley);
    for (let i = 0; i < valley.length; i++) {
        if (valley[i] < 0 && (valley[i - 1] === 0 || valley[i - 1] === undefined)) {
            count++;
        }
    }
   
    return count;
}

const res = countingValleys(8, 'UDDDUDUU');
console.log(res);

const res2 = countingValleys(12, 'DDUUDDUDUUUD');
console.log(res2);

const uniqueSubs = str => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

const res = uniqueSubs('cat');
console.log(res);

function braces(values) {
  if (values.length <= 1)
      return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < values.length; i++) {
      ch = values[i]

      if (closingBrackets.indexOf(ch) > -1) {
          matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
          if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
              return 'NO'
          }
      } else {
          stack.push(ch)
      }
  }

  return (stack.length == 0) ? 'YES' : 'NO';
}

const res = braces(['{','}','[',']','(',')']);
console.log(res);

const res2 = braces(['{','[','}',']','}']);
console.log(res2);
// merge two sorted linked lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let l3 = {
        val: -1,
        next: null
    }
    let prev = l3;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 || l2;

    return l3.next;
};

// compare words in an array like ['flower', 'flow', 'flight']
// and return the longest common prefix. i.e. 'fl'
var longestCommonPrefix = function(strs) {
    if (strs.length < 2) { return strs.join('')}
    let result = [];
    
  for (let i = 0; i < strs.length - 1; i++) {
      let prev = strs[i];
      let next = strs[i + 1];
      
      let temp = '';
      for (let j = 0; j < next.length; j++) {
          let charOne = prev[j]
          let charTwo = next[j]
          if (charOne === charTwo) {
            temp += charOne;
          } else {
              break;
          }
      }
      
          result.push(temp);
  }
    return result.sort()[0]
};

// palindrome of numbers 
var isPalindrome = function (x) {
    let numS = x.toString();
    let mid = Math.floor(numS.length / 2);

    for (let i = 0; i < mid; i++) {
        let j = numS.length - i - 1;
        console.log(numS[j])
        if (numS[i] !== numS[j]) {
            return false;
        }
    }
    return true;
};

const a = isPalindrome(1001)
console.log(a)

// remove duplicates in place returning length

var removeDuplicates = function(nums) {
    if (nums.length === 0) { return 0}
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
