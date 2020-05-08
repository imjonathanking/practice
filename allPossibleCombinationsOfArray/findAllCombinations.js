// Find all possible combinations of an array
const findAllCombinations = (inputArray) => {
    console.log('inside findAllCombinations');
    let outputArray = [];
    let numberOfIterations = 0;


    for(i = 0; i < inputArray.length; i++){
        const thisItem = inputArray[i];

        const thisObj = {
            numberOfIterations: numberOfIterations,
            thisItem: thisItem
        }

        outputArray.push(thisObj);

        numberOfIterations++;
    }

    return {
        inputArr: inputArray,
        outputArray: outputArray
    };
}

module.exports = findAllCombinations;