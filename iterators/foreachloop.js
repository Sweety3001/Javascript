// const coding =["js","riby","cpp","java","js"]
// const values= coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);


const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num > 4)
// console.log(newNums);

const newNums = myNums.filter( (num)=> {
    return num>4 // if scope is started return keyword is mandatory
})

console.log(newNums);

const books = [
    {title: 'B1', genre:'Fb'},
    {title: 'B2', genre:'Fd'},
    {title: 'B3', genre:'Fs'},
    {title: 'B4', genre:'Ff'},
    {title: 'B5', genre:'Ft'},
    {title: 'B6', genre:'Fe'},
]
let userBooks= books.filter((bk)=>bk.genre === 'Ft')
userBooks = books.filter((bk)=>{return bk.genre=== 'Ft' && bk.title==='B5'})
console.log(userBooks);


const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const res=myNumers.map((num)=>{return num+10})
const newN=myNumers.map((num)=> num*10).map((num)=>num+2).filter((num)=>num>40)
console.log(newN);
