

const coding =["js","riby","cpp","java","js"]
// coding.forEach(function (item) {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javasript",
        languageFileNAme: "js"
    },
    {
        languageName: "java",
        languageFileNAme: "java"
    },
    {
        languageName: "python",
        languageFileNAme: "py"
    },
]
myCoding.forEach( (item)=>{
    console.log(item.languageFileNAme);
    
})