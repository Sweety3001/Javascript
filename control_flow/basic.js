if(true){
    console.log("hii"); 
}

// <,>, <=, >=, ==, !=, ===, !==

const balance= 100
if(balance > 500) console.log("test");

const userLoggedin = true
const debitCard = true
const loggedINfromGoogle = false
const loggedInfromEmail = true
if(userLoggedin && debitCard){
    console.log("Allow ro buy courses");
    
}
if(loggedINfromGoogle ||  loggedInfromEmail){
    console.log("user logged in");
    
}