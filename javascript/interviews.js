function arithmeticBoggle(magicNumber, numbers) {
    // Fill in the code here
    if (magicNumber === 0 && numbers.length < 1) { return true }
    if (numbers.length < 2 && numbers[0] === magicNumber) {
        return true;
    }
    if (numbers.length < 2 && numbers[0] !== magicNumber) {
        return false;
    }

    let store = [numbers[0] + numbers[1], numbers[0] - numbers[1]];
    for (let i = 2; i < numbers.length; i++) {
        let newStore = [];
        for (j = 0; j < store.length; j++) {
            newStore.push(store[j] + numbers[i], store[j] - numbers[i]);
        }
        store = newStore;
        if (store.includes(magicNumber)) {
            return true;
        }
    }

    return false;
}


console.log(arithmeticBoggle(2, [1, 2, 3, 4]));
console.log(arithmeticBoggle(-42, [1, 13, 57, 17, 19, 35]));

const repeated = (arr, k) => {
  let counterHash = {};

  arr.forEach(word => {
      if (counterHash.hasOwnProperty(word)) {
          counterHash[word] += 1;
      } else {
          counterHash[word] = 1;
      }
  });
  return Object.keys(counterHash).find(key => counterHash[key] === k);
}

const answer = repeated(['red', 'red', 'blue', 'blue', 'blue', 'green'], 2);
console.log(answer);

// The forEach loop is O(n) linear time because it traverses every element of the array and stores it into an Object.
// Object.keys is also O(n) because its look looking at each key in the object and filtering based on the .find criteria.
