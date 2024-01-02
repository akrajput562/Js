const marvel_heros= ["break","if","else"]
const dc = ["i9","i7","i5"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const combine= marvel_heros.concat(dc)
// console.log(combine);

const all_new_heros=[...marvel_heros,...dc]
//"..."Spread operator now everything will be spread

// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[4,5,[8,9]]]

//Nested array to flat array mean simple one array
let usable_another_array = another_array.flat(Infinity)

console.log(usable_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
