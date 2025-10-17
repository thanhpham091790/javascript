// Iterating over a string
const word1 = 'W3schools';
for (const c1 of word1) {
    console.log(c1);
}

// Iterating over an array
const letters2 = ['a', 'b', 'c'];
for (const c2 of letters2) {
    console.log(c2);
}

// Iterating over a set
const letters3 = new Set(['a', 'b', 'c']);
for (const c3 of letters3) {
    console.log(c3);
}

// Iterating over a map
const fruits = new Map([
    ['apple', 500],
    ['bananas', 300]
]);

for (const c4 of fruits) {
    console.log(c4);
}