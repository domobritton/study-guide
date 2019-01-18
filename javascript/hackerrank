const sortScore = (arr, n) => {
    const store = {};

    for (let i = 0; i <= n; i++) {
        store[i] = 0;
    };

    arr.forEach(num => {
        store[num] += 1;
    });
    let result = [];
    
    for (let i = 0; i <= n; i++) {
        
    }

    
    // key pushed into array, the value number of times;

}

const answer = sortScore([1, 2, 2, 3, 5, 4, 2, 1], 5);
console.log(answer);
function utopianTree(n) {
    let cycles = 1;
    if (n === 0) {
        return cycles;
    };
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            cycles = cycles + 1;
        } else {
            cycles = cycles * 2;
        }
        
    }
    return cycles;
}

const answer = utopianTree(6);
console.log(answer);

function angryProfessor(k, a) {
    let count = 0;
    a.forEach(student => {
        if (student <= 0) {
            count++;
        }
        console.log(count)
    });
    return count < k ? 'NO' : 'YES';
}

const session = angryProfessor(2, [0, -1, 1, 2])
console.log(session)

function beautifulDays(i, j, k) {
    let counter = 0;
    for (i = i; i <= j; i++) {
        let reversed = Number(i.toString().split('').reverse().join(''));
        let number = (i - reversed) / k;
        console.log(number)
        if (number % 1 === 0) {
            counter++;
        }
    }
    return counter;
}

const beauty = beautifulDays(20, 23, 6);
console.log(beauty);

function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;
    if (n === 0) { return 0; }
    for (let days = 1; days <= n; days++) {   
        let liked = Math.floor(shared / 2);
        let newShared = liked * 3;
        shared = newShared;
        cumulative += liked;
    }
    return cumulative;
}

const viral = viralAdvertising(5);
console.log(viral);
