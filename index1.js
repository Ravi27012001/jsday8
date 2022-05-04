// let str = "lakhvinder singh";
// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.endsWith(" h "));

let str = "Lakhwinder Singh";
console.log(str.length);
console.log(str.charAt(2));

//endsWith
console.log(str.endsWith("g"));

// includes

let sentence = "Hello World";
console.log(sentence.includes("world"));

// indexOf, lastIndexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//length

console.log(str.length)

console.log(str.replace("Lakhwinder","lakhi"));
console.log(str.search("Lakhwinder"));
console.log(str.search("Singh"));
// substr

console.log(str.substr(1,4));
// first index value is inclusive and last index value is exclusive
console.log(str.substring(0,11));
// js will lowervalue will starting index no matter lower value is written in after coma and larger value will treat as a lasst index value
console.log(str.substring(11,0));

let email = "ravikantjrkp@gmail.com";
let value = email.split("@");
console.log(value);



