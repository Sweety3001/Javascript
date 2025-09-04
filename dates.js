// January 1, 1970
// date bydefault count by milisecond

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCrtDate = new Date(2025, 0, 23)
// console.log(myCrtDate);
// console.log(myCrtDate.toDateString());
// let myCrtDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCrtDate.toLocaleString());
let myCrtDate = new Date("01-14-2025")
// console.log(myCrtDate.toLocaleString());

let myTime= Date.now()
// console.log(myTime);
// console.log(myCrtDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})