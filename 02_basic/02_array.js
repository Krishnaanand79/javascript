const dc_heroes = ["superman", "flash" , "batman"]
const marvel_heroes = ["thor", "Ironman", "spiderman"]

// marvel_heroes.push(dc_heroes)

const allHeros = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

const all_heros_heros = [...marvel_heroes,...dc_heroes] // spread operator is used to expand or unpack the element of individual value or properties 
// console.log(all_heros_heros);

const another_array = [1,  2 ,3 ,[4, 5, 6], 7 ,[6, 7 , [4,5]]]
const real_another_array =  console.log(another_array.flat(Infinity)) // flat - it flatterns nested arrays into single - level array .

console.log(Array.isArray("krishna")) // is array check whether this is array or not 
console.log (Array.from("krishna")); // convert it into Array 
console.log(Array.from({name:"Krishna"})) // it gives empty array bacuse it gets not convertes it into array because it is key value pairs 

let score1 = 100; 
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2 , score3))// return a new array from a set of element 

