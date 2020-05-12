const generateAllCombinations = (input) => {
    let output = [];
    for(i = 1; i <= input.length; i++){
        output.push({
            combinationLength: i,
            combinations: findCombinations(input, i)
        })
    }
    return output;
}

// Find all combinations of an array with a fixed length
const findCombinations = (arr, size) => {
    let output = [];

    for(let combo of generateCombinations(arr, size)){
        output.push(combo);
    }

    return output;
}

// Generator function
function* generateCombinations(arr, size){
    function* doGenerateCombinations(offset, combo){
        if(combo.length == size){
            yield combo;
        }
        else{
            for(let i = offset; i < arr.length; i++){
                let thisCombination = arr[i];
                yield* doGenerateCombinations(i + 1, combo.concat(thisCombination))
            }
        }
    }
    yield* doGenerateCombinations(0, [])
}

module.exports = generateAllCombinations;