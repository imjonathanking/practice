let inputArr = ['first', 'second', 'third', 'fourth'];

// Defining combine function
const combine = (input) => {
    let output = [];

    inputArr.forEach((item, index) => {
        const thisObj = removeElements(input, index)
        output.push(thisObj);
    })

    return output;
}

// Removes items from an array
const removeElements = (arr, amountToRemove) => {
    let output = {
        itemsRemoved: amountToRemove,
        inputArr: arr
    }

    let newArr = arr.slice(amountToRemove, amountToRemove + 1);

    output.testing = newArr;

    return output;
}

// Call combine function
const combinedArr = combine(inputArr);
console.log(combinedArr);