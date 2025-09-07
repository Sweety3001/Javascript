//array
// resizeable
//creates  shallow copy when copy operation formed.. same reference
const myArr = [0,1,2,3,4,5]
const myHero = ["sk", "hj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

//methods
myArr.push(6) //to add a element to array in end
console.log(myArr);

myArr.pop() // to delete last element
console.log(myArr);

myArr.unshift(9) // to add a element in starting
console.log(myArr);

myArr.shift()
console.log(myArr); //to delete 1st element 

console.log(myArr.includes(9)); // if present or not
console.log(myArr.indexOf(3)); // index

const newArr= myArr.join() //bind the array and convert it to comma separated string 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice -> doesn't manipulate the original array
//splice-> manipulates the original array
console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


///////////////////////////////////////////////////////////

const marvel = ["ht", "jas","had"]
const dc= ["kas","hjas","saih"]
marvel.push(dc) // add the 2nd array inside first array as a single element, chnages directly the original array
console.log(marvel);
const md=marvel.concat(dc) // add both array in a single array
console.log(md);

//spread operator
const all_md=[...marvel, ...dc]
console.log(all_md);


const another_arr = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_arr = another_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_arr);

console.log(Array.isArray("Sweety"));
console.log(Array.from("Sweety")); //converts to array
console.log(Array.from({name:"Sweety"})); //empty array

let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1,sc2,sc3));
