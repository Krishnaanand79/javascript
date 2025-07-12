const accountId = 12387
let accountEmail = "krish@gmail.accountEmail"
var accountpassword = "32419"
accountCity = "jaipur"
let accountState
//accountId = 2 // not allowed

/*
prefer not to use var
bacause of issue in block scope and functional scope
 */
accountEmail = "ha@gmail.com"
accountpassword = "456"
accountCity = "Benguluru"

// console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])