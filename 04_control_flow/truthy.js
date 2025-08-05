const userEmail = []

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Dont  have user email")
}

// falsy values

// false , 0 , -0, BigInt 0n, "", null, undefined , NaN

// truthly values

// "0" , 'false', " " , [] , {} , function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}


// Nullish coalescing operator(??): null undefined 

let val1 ;
// val1 = 5??10 -- 5
// val1 = null ??10  -- 10

val1 = null ?? 10 ?? 20 

// val1 = undefined ?? 15 -- 15

console.log(val1);


// terniary operator

//  condition ? true : false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")