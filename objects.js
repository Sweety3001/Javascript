//singleton 

//Object.create
//object literals
const mySym = Symbol("key1")
const jsUser= {
    name: "Sweety",
    [mySym]: "mykey1",
    age: 21,
    location: "jsg",
    email: "sweety@gmail.com",
    isLogged: false,
    lastLogin: ["monday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email="kunu@gmail.com"
console.log(jsUser.email);

// Object.freeze(jsUser)

jsUser.email="shruti@gmail.com"
console.log(jsUser.email);

console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hiii jsUser");
    
}
jsUser.greetingTwo=function(){
    console.log(`Hello js User, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
// console.log(jsUser);


////////////////////////////////////////////////////////

const tinderUser = new Object()

tinderUser.id="123aasd"
tinderUser.name="sweet"
tinderUser.isLogged=false

console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullName: {
        userfullN: {
            firstn: "Sweety",
            lastn: "Pradhan"
        }
    }
}
console.log(regularUser.fullName.userfullN.firstn);

const obj1={1:"a",2:"b"}
const obj2={3:"c", 4:"d",5:"e"}
const obj3={obj1,obj2}
console.log(obj3);
const obj4=Object.assign({},obj1,obj2) //{} is taken as a source so all objects goes in that empty object or else all the other object will go in 1st object
console.log(obj4)
const obj5={...obj1, ...obj2} //spread operator for joining all objects
console.log(obj5);



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));// to check if property is available or not
