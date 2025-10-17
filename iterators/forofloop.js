// for of

const arr =[1,2,34,5,6]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
console.log(map);
for (const key of map) {
    console.log(key);
    
}
for (const [key,value] of map) {
    console.log(key,':',value);
    
}
const myObject ={
    'game1':'MFS',
    'gam2':'spiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key,value);
    
// } //object is not iterable this way

