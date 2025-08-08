for(let i = 0 ; i<= 10 ;i++){
    const element = i ;
    if(element == 5){
        // console.log("5 is the best number ");

    }
    // console.log(element);
}

for(let i = 0 ; i<= 10 ; i++){
    // console.log(`outer loop values: ${i}`);
    for(let j = 0 ; j<=10;j++){
        // console.log(`inner loop values ${j} and inner loop ${i}`)
    }
}

let myarray = ["flash", "batman" , "superman"]
console.log(myarray.length);
for(let index = 0; index < myarray.length; index++){
    const element = myarray[index];
    console.log(element);
}


// Break and continue

for(let index = 1;index <= 20 ;index++){
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}

//continue 

for(let index = 1;index <= 20 ;index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue 
        
    }
    console.log(`value of i is ${index}`);
}


