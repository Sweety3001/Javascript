"use strict"; //treat all code as newer version

// alert(3 + 3) ...// we are usinh nodejs, not browser

let name="sweety"
let age=15
let isLoggedin = false

// number, bigint, string, boolean , null, undefined => these are the datatypes in js

// null=> standalone value, empty value
// undefined=> value not assigned till now
//object 
console.log(typeof "sweety")
console.log(typeof null) //object


/*Primitive datatype 
7 types: string, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3
const isLogged = false
const outsideTemp = null
let userEmail 

const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId );

/* Reference(Non- Primitive) 
Array, Objects, Functions
return type of all non-primitive is object function
*/


const heros = ["sk", "nj" , "dg"];
let myObj = {
    name: "sweett",
    ag: 22,
}

const myfunction = function(){
    console.log("Hello World");
}