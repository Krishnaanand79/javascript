// const tinderUser = new Object() // singleton object 

const tinderUser = {}

tinderUser.id = "234abc"
tinderUser.name = "Krishna"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const rgugularUser = {
    email: "kam@123.com",
    fullname: {
        userfullname: {
            firstname: "krishna",
            lastname: "Anand"
        }
    }
}

// console.log(rgugularUser.fullname);

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "c" , 4: "d"}
const obj3 = {5 : "f" , 6: "f"}

// const obj5 = {obj1 , obj2 , obj3}

// const obj5 = Object.assign({}, obj1 , obj2 , obj3) // it acts as the target and source 

const obj5 = {...obj1 ,...obj2}// using spread operator
console.log(obj5)

console.log(Object.keys(tinderUser)) // access key  by using objects 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))