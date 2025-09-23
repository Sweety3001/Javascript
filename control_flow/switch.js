// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Default case matched");
        break;
}


// Falsy Values -> false, 0, -0, BigInt 0n, "", null, undefined, Nan

//Truthy Values-> "0", 'false', " ",array[],object{}, function(){}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);


//Terniary Operator
//condition ? true : false