const myArray = [0 , 1, 2, 3, 4]
const myHeroes = ["Shaktiman" , "ram "] 

const myArray2 = new Array(1 , 2 ,3 ,5 )
console.log(myArray[0]);


// Array methods 

myArray.push(8) // insert the element 
myArray.pop() // deleted frrom the last 


myArray.unshift(8) // insert the element from the starting from the array  
myArray.shift()// remove the first element from the array 

console.log(myArray.includes(9)); // return type is in boolean i.e truee or false 
console.log(myArray.indexOf(9)); // check the index of 9 if not present then return -1

const newArray = myArray.join()// join - add the  all element of array and return  into string 

// console.log(myArray);
// console.log(newArray);

// Slice , splice 

console.log("A " , myArray);

const myn1 = myArray.slice(1,3)// last element is not included 

console.log(myn1);
console.log("B" , myArray);

const myn2 = myArray.splice(1,3)
console.log("c" , myArray);

console.log(myn2);
