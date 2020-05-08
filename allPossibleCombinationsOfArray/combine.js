const combine = (inputArr) => {

    let fn = (n, src, got, all) => {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }

    let all = [];

    for (let i = 0; i < inputArr.length; i++) {
        fn(i, inputArr, [], all);
    }

    all.push(inputArr);

    return all;
}

module.exports = combine;