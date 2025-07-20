let myDate = new Date()

// these all are the data object method to print date and time in differnt way 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate); // object 

let myCreatedDate = new Date(2023 , 0 , 23) // in js month will be counted by 0
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date("01-14-2023") 
console.log(myCreatedDates.toDateString());

let myTimeStamp =  Date.now()// we cant use new with Date.now because it is a static method not a constructor
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));// time converted it into milisecond into second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})



