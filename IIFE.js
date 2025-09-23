//Immediately invokedd function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
    
})();
// global scope pollution hatane k liye



((name) => {
    console.log(`Db connected two ${name}`);
    
})('sweety')