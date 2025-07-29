// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1 , number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumber(3,5)

console.log("result" , result );

function loginUserMessage(username = "krishna"){ // if you does not pass then value then it will return krishn as default 
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Krishna"))

console.log(loginUserMessage())// if the value  doesnot pass then its gives undefined 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300 , 500, 1000))

//object

const user = {
    username: "Krishna",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Pass the user object as an argument toit 

//  handleObject(user)

handleObject({
    username: "Sam",
    price : 87
})

// passing the array 

const myNewArray = [200 , 400 , 100 , 600]

function returnValues(getArray){
    return getArray[1]
}

console.log(returnValues(myNewArray))
