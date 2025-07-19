const name = "hitesh"
const repocount = 54

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// new way to define strings 

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);// length of string
console.log(gameName.toUpperCase());//string are uppercase
console.log(gameName.charAt(2));// character at index 2 
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "       hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());// trim function helps in trim the whitespace 

const url = "http://hitesh.com/jotesh%20"
console.log(url.replace('20' , '-')) // replace keywords helps to replace the words 

console.log(url.includes('hitesh'))//include means that the word is present in the sentence or not 

console.log(gameName.split('-'))// convert into array







