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