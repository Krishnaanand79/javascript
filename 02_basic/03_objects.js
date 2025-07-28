
const mySym = Symbol("key1")// create a symbol with description

const jsUser = {
    name: "Krishna",
    "full name" : "krishna anand",
    [mySym] : "mykey1", // symbol key is used as key 
    age: 18 ,
    location: "chandigarh",
    email: "krishna@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday , friday"]
}

// two ways to define objects 
console.log(jsUser.isLoggedIn)
// another ways are 
console.log(jsUser["email"])
console.log(jsUser["full name"])

console.log(typeof jsUser[mySym]) // access the symbol key 

jsUser.email = "krishna@.com" // change or replace the email
// freeze - it helps us to freeze the value that cannot be changed
// Object.freeze(jsUser)
console.log(jsUser);

// function declaration 
jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())