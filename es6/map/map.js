const listPeople = () => {
    peopleArray = [];

    class People {
        constructor(name, age){
            this.name = name,
            this.age = age
        }
    }

    const jonathan = new People("Jonathan", 21)
    const tyler = new People("Tyler", 25)
    const stephen = new People("Stephen", 24)
    const hannah = new People("Hannah", 22)
    const alissa = new People("Alissa", 27)

    peopleArray.push(jonathan, tyler, stephen, hannah, alissa)

    return peopleArray;
}

const allPeople = listPeople();

const makeHappy = (people) => {
    const happyPeople = people.map(thisPerson => {
        thisPerson.isHappy = true;
        return thisPerson;
    })
    return happyPeople
}

console.log(makeHappy(allPeople))