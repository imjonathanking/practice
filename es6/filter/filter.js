const listAnimals = () => {
    animalArray = [];

    class Animal {
        constructor(name, type){
            this.name = name,
            this.type = type
        }
    }

    const dolphin = new Animal("Dolphin", "fish");
    const jellyfish = new Animal("Jellyfish", "fish");
    const penguin = new Animal("Penguin", "bird");
    const flamingo = new Animal("Flamingo", "bird");
    const frog = new Animal("Frog", "amphibian");
    const gecco = new Animal("Gecco", "amphibian");
    const salamander = new Animal("Salamander", "amphibian");
    const cat = new Animal("Cat", "mammal");
    const human = new Animal("Human", "mammal");

    animalArray.push(dolphin, jellyfish, penguin, flamingo, frog, gecco, salamander, cat, human);

    return animalArray;
}

const allAnimals = listAnimals();

const filterByType = (animals, type) => {
    const filtered = animals.filter(animal => {
        return animal.type === type
    })
    return filtered;
}

const allFish = filterByType(allAnimals, "fish");

console.log(allFish);