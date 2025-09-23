
const user ={
    username: "sweety",
    price: 133,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //this current context ko refer karta hai
        // console.log(this); // current value ka detail
        
    }

}
user.welcomeMessage()
user.username="kunu"
user.welcomeMessage()

//----------Inside function we cannot use this
// function one(){
//     let username="sweety"
//     console.log(this.username);
    
// }
// one()

const chai = () => {
    let user="sweety"
    console.log(this.user);
}
chai()


const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

//Implicit return 
const addTw = (num1, num2) => ( num1+num2)
console.log(addTw(3,4));

