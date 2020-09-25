const thingPrototype = {
    addToArray: function(input){}
}

const CreateModifyArray = (input) => {
    let arr = input || [];

    const addToArray = (input) => {
        arr = arr.concat(input);
        return CreateModifyArray(arr);
    }

    return { arr, addToArray };
}

const firstArr = CreateModifyArray();
const secondArr = CreateModifyArray();

let firstNewArr = firstArr
    .addToArray('first')
    .addToArray('array')

let secondNewArr = secondArr
    .addToArray('second')
    .addToArray('array')

let firstNewArr = firstNewArr
    .addToArray('new item added')

console.log({ firstNewArr, secondNewArr });