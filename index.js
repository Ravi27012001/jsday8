// Map,filter,reduce
let number = [2,4,5,6,7,8,9];
console.log(number);
number.map((item)=>{console.log(item)})

let res = number.filter((item)=>{
return item > 3

})
console.log(res);

let res1 = number.reduce((acc,cur)=> acc = acc + cur,0);
console.log(res1)

let res2 = number.reduce((acc,cur)=> acc = acc * cur,1);
console.log(res2)

 let res4 = number.filter((item)=>{
     return item > 5;
 })
 console.log(res4);