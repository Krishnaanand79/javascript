const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function (acc, currentVal){
//     console.log(`acc : ${acc} and currentVal: ${currentVal}`);
//     return acc + currentVal
//  }, 0)



// for use of arrrow keywords to implement reduce 
// const myTotal = myNums.reduce( (acc ,curr) => acc+curr,0)


// console.log(myTotal);
 
const shoopingCart = [
    {
        itemName :"js couse",
        price :2999
    },
    {
        itemName :"java",
        price :2999
    },
    {
        itemName :"Data scientist",
        price :12999
    },
]

const priceTopay = shoopingCart.reduce((acc, item) => acc + item.price , 0 )

console.log(priceTopay);
