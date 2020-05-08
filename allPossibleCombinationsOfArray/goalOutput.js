const input = ['first', 'second', 'third'];

let goalOutput = [
    {
        removed: 0,
        combinations: [
            ['first', 'second', 'third']
        ]
    },
    {
        removed: 1,
        combinations: [
            ['second', 'third'],
            ['first', 'third'],
            ['first', 'second']
        ]
    },
    {
        removed: 2,
        combinations: [
            ['first'],
            ['second'],
            ['third']
        ]
    }
]