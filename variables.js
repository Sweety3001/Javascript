const accountId = 1342323 //no changes in const
let accountEmail = "sweety@gmail.com"
var accountPass = "123224"
accountCity = "Sbp"
let accountState;
// accountId = 2 (this is not allowed)

console.log(accountId);

accountEmail = "dskhkld@gmail.com"
console.log(accountEmail);
accountPass = "987392"
console.log(accountPass);

/*Prefer not to use var bcoz of issue in block scope*/
console.table([accountEmail, accountId, accountPass, accountState])
