let a=10
const b=20
var c=30 // var doesn't follow the scope we can acess it outside scope also which is not good 

// const b=30
console.log(a);
console.log(b);
console.log(c);

function one(){
    const username="sweety"
    function two(){
        const web="youtube"
        console.log(username);
        
    }
    // console.log(web);
    two()
}
one()



//`````````````````````````````````````````````````````````

function addOne(num){
    return num+1
}
addOne(5)



const addTwo= function(num){
    return num+2
}
addTwo(5)