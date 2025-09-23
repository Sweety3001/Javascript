function sayMyName(){
    console.log("Sweety");
    console.log("Sweety");
    console.log("Sweety");
    console.log("Sweety");
    console.log("Sweety");
    
}
sayMyName()

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
    
// }
// addTwoNum(2,3)

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNum(3,5)
console.log("result:" , result);

function loginUser(username){
    if(!username){
        console.log("Please enyer a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUser("Sweety"));

function calc(...num){
return num
}
console.log(calc(200,300,3404,432));

const usr = {
    username: "sweety",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}`);
    
}
handleObject(usr)

const mynewArrr=[100,200,230,400]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(mynewArrr));
