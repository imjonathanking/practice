const combine = (inputArr) => {
    let all = [];

    for (let i = 0; i < inputArr.length; i++) {
        fn(i, inputArr, [], all);
    }

    all.push(inputArr);

    return all;
}

let fn = (n, sourceArray, got, all) => {
    if (n == 0) {
        if (got.length > 0) {
            all[all.length] = got;
        }
        return;
    }
    for (let j = 0; j < sourceArray.length; j++) {
        let thisItem = [sourceArray[j]];
        fn(n - 1, sourceArray.slice(j + 1), got.concat(thisItem), all);
    }
    return;
}

const input = ['first', 'second', 'third', 'fourth'];

console.log(combine(input))