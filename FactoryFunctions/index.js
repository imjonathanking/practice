function createJelly(){
    return {
        type: 'jelly',
        color: 'red',
        scoops: 3
    }
}

function createIceCream(flavor='Vanilla'){
    return {
        type: 'icecream',
        scoops: 3,
        flavor
    }
}

function createDessert(){
    return {
        type: 'dessert',
        bowl: [
            createJelly(),
            createIceCream()
        ]
    }
}

const thisDessert = createDessert();
console.log(thisDessert);