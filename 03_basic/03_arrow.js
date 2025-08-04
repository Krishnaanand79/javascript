const user ={
    username: "Krishna",
    price: 999,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
}

// this key refers to current context  

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

console.log(this);

// function chai(){
//     let username = "Krishna"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "krishna"
//     console.log(this.username);
// }


const chai = () => {
    let username = "krishna"
    console.log(this);
}
chai()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => (num1 +num2) // implicit -- because it does not use return keywords 

const addTwo= (num1 , num2) =>({username: "Krishna"})

console.log(addTwo(4,3))