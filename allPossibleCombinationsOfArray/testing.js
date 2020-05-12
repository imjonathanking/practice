// Find all combinations of an array
const findAllCombinations = (input) => {
    let output = [];
    let alreadyCompared = [];

    input.forEach(item => {
        let thisValue = item;

        // Push this value to array of values that have already been compared
        alreadyCompared.push(thisValue);
        console.log({ alreadyCompared })

        console.log({ thisValue });
    })

    console.log('Input array after function.  Testing for mutation: ');
    console.log(input);

    return output;
}

// Used to compare 
const compareAgainst = (thisItem, arr) => {
    return 'test';
}

const output = findAllCombinations(['first', 'second', 'third', 'fourth']);
console.log(output);