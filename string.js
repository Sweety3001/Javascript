const name="sweety"
const repocount= 50
console.log(name + repocount+ " Value");

console.log(`Hello my name is ${name} `);

const gameN = new String('jhasj-swet')
console.log(gameN[0]);
console.log(gameN.__proto__);

console.log(gameN.length);
console.log(gameN.toUpperCase());
console.log(gameN.charAt(2));
console.log(gameN.indexOf('j'));
console.log(gameN.split('-'));

const newStrng = gameN.substring(0,4)
console.log(newStrng);
const anotherStrng = gameN.slice(-8,4)
console.log(anotherStrng);

const nameEx = " Shruti "
console.log(nameEx);
console.log(nameEx.trim());

const url="htttps://sweety.com/sweeety%20pradhan"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));