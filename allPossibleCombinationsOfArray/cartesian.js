const getAllSubsets = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [...set, value])
        ),
        [[]]
      );

console.log(getAllSubsets(['first', 'second', 'third', 'fourth']));