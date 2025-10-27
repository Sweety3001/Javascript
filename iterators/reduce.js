const arr=[1,2,3,4,5,6]
// const myTot=arr.reduce(function(acc,currval){
//     return acc+currval
// },0)

const myTot = arr.reduce((acc,currval)=> acc+currval,0)
console.log(myTot);


const shoppingCart=[
    {
        itemName:"js",
        price:200
    },
    {
        itemName:"cpp",
        price:299
    },
    {
        itemName:"dsa",
        price:499
    },
    
]
const priceTopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTopay);
