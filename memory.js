/* 
Memory are of 2 types
Stack(Primitive), -> we get a copy
Heap(Non-Primitive) -> reference of original value
*/
//STack example
let myYt = "sweety"

let anotherYt = myYt
anotherYt = "kunu"
console.log(myYt);
console.log(anotherYt);

//Heap example
let userOne = {
    email: "user@gmail.com",
    upi: "2332233@sbi.in"
}

let userTwo = userOne
 userTwo.email="sweety@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 