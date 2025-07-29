// var c = 40

// block scope 
let a = 300

// global scope
if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}

console.log(a)


// nesting 

function one() {
    const username = "krishna"


    function two() {
        const website = "youtube"
        console.log(username)
    }

    // it cant access the outside the function it is local scope
    // console.log(website); 
    two()
}


// it acceess the outer function because of global scope 
// one()

if(true){
    const username = "krishna"

    if(username === "krishna"){
        const website ="youtube"
        console.log(username + website)
    }
    // console.log(website)
}

// console.log(username); //it is not accessible outside that block (due to block scope).


// +++++++++++++++++intresting++++++++++++++++++



console.log(addone(2))// function is downward but we have to access that 

function addone(num){
    return num+1
}


// In this case  we made a function we cant declare upside and access this this holds in the constant that property is called hosting 

const addTwo = function (num){
    return num + 2
}

console.log(addTwo(40))
