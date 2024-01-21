const accountId = 144553 //value change nahi ho sktee (const keyword ke)

let accountEmail = "tusharsajwann@gmail.com"
var accountPassword = "12345"
let accountCity = "Dehradun"
let accountState;

 // accountId = 2 //not allowed


accountEmail = "ts@gamil.com"
accountPassword = "12345"
accountCity = "noida"

console.log(accountId);

/* 
prefer not to use var because
of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
