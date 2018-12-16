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
