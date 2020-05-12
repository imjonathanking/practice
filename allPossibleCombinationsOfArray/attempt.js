console.log('testing');

const findAllCombinations = (input) => {
    console.log('inside findAllCombinations()');

    if(input.length === 1) return [ input ]
}

const inputArr = ['this', 'is', 'a', 'test'];
const result = findAllCombinations(inputArr);
console.log(result);