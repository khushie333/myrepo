// const week={
//     opening:{
//     sat:{
//         open:11,
//         close:23,
//     },
//     mon:{
//         open:10,
//         close:24,
//     },
//     fri:{
//         open:11,
//         close:23,
//     },
//     },
//     order(a){
//         console.log(a);
//     },
// }
// // for(const day of Object.keys(week)){
// //    // console.log(day);
// // }
// // const weekdays=week.opening;
// // console.log(weekdays);
// // for(const day of Object.keys(weekdays)){
// //     console.log(day);
// // }
// // const properties=Object.keys(weekdays);
// // console.log(properties);

// // const values= Object.values(weekdays);
// // console.log(values);

// // for (const [i,el] of Object.entries(week) )
// // {
// //     console.log(`${i} => ${el}`);
// // }

// // const entries= Object.entries(weekdays);
// // console.log(entries);
// // for (const [key,{open,close}] of entries)
// // {
// //     console.log(`on ${key} we open at ${open} and 
// //     close at ${close}`);
// // }
// // const orderset= new Set(["pasta","pizza",1,"2","burger","pasta","pizza"]);
// // console.log(orderset);
// // const set2=new Set(["pasta","pizza",[1,2,3]]);
// // console.log(set2);
// // console.log(new Set('khushi'));
// // console.log(orderset.size);
// // console.log(orderset.has('pizza'));
// // console.log(orderset.has('bread'));
// // orderset.add('bread');
// // console.log(orderset);
// // orderset.delete('2');
// // console.log(orderset);
// // for(const order of orderset) console.log(order);
// // const staff=["chef","waiter","master"];
// // const staffset=new Set(staff);
// // console.log(new Set('khushipithadia'));
// // const rest= new Map();
// // rest.set("name","italian");
// // rest.set(1,"maxican");
// // console.log(rest);
// // console.log(rest.set(2,"indian"));
// // console.log(rest.get('name'));
// // console.log(rest.get(1));
// // rest.set('categories',['spicy','sweet'])
// //     .set('open',11)
// //     .set('close',23)
// //     .set(true,'we are open')
// //     .set(false,'we are closed')
// // console.log(rest);
// // const time=13;
// // console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));
// // console.log(rest.has('name'));
// // console.log(rest.has('categories'));

// // const arr= [1,2];
// // rest.set(arr,'test');
// // console.log(rest.get(arr));

// const question= new Map([
//     ['question','what is the best ?'],
//     [1,'c'],
//     [2,'java'],
//     [3,'javascript'],
//     ['correct',3],
//     [true,'correct'],
//     [false,'try again'],

// ]);
// //console.log(question);
// //objects to map
// // const hours =new Map(Object.entries(week));
// // console.log(hours);
// // for(const [key,value] of question){
// //     console.log(`answer ${key}=>${value}`);
// // }
// //console.log([...question])
// //console.log([...question.keys()])
// //console.log(...question);
// //console.log([...question.values()]);
// // const arirline='tap air portugal';
// // const plane='A230';
// // console.log(plane[2]);
// // const checkmiddleseat=function(seat){
// //     const s=seat.slice(-1);
// //     if(s==='B'||s==='E') console.log('you got the middle seat');
// //     else console.log('you got lucky');

// // }
// // checkmiddleseat('12C');
// // checkmiddleseat('45E');
// // checkmiddleseat('29W');

// // console.log(new String ('jonas'));
// // console.log(typeof new String('jonas').slice());
// // let text= 'underscore_Casee';
// // const rows= text.split('\n');
// // console.log(rows);
// // for(const row of rows){
// //    const[first,second]=row.toLowerCase().trim().split('_');
// //     const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
// //     console.log(output);
// // }

// let text='underscrore_text';
// const rows=text.split('\n');
// console.log(rows);
// for(const row of rows){
//     const[first,second]=row.toLowerCase().trim().split('_');
//     const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
//     console.log(output);

// }
// let string = "please,wait,we,are,processing";
// let newtext= console.log(string.replace("processing","loading"));
// console.log(string.split(","));
// console.log(string.slice(string.indexOf('i'),string.indexOf('g')));

// const arr=[-1,2,-3,4,-5];
// const arr2=[6,7,8];
// console.log(arr.concat(arr2));

// arr.forEach(function(a){
//     if(a>0){
//         console.log("you deposited:" ,a);
//     }
//     else{
//         console.log("you withdrew",Math.abs(a));
//     }
// });
// arr.forEach(function(b){
//     if(b>1){
//         console.log("you're now allowed to enter");
//     }else if(b>2 || b>3){
//         console.log("you should wait");
//     }
//     else {
//         console.log("  you're not allowed");
//     }
// })
// for(const [i,a] of arr.entries()){
//     console.log(`${i} => ${a}`);
// }

// // let ar=['a','b','c','d','e'];
// // console.log(ar.slice(2));
// // console.log(ar.slice(-2));
// // console.log(ar.slice(1,-2));
// // console.log([...ar]);
// // console.log(ar.slice());
// // console.log(ar.splice(2));
// // console.log(ar);
// // console.log(ar.join('-'));
// // ar.push('c','d','e');

// // console.log(ar);
// // console.log(ar.join('-'));
// //const arr=[-1,2,-3,4,-5];

// // -----------------map array method
// function triple(args){
//     return args*3
// }
// let new_arr= arr.map(triple)
// console.log(new_arr);


// function double(n)
// {
//     return n*2
// }
// let arr3=arr.map(double);
// console.log(arr3);
// //------------------filter array method
// let arr4=arr.filter(function(x){
//     return x>0;
// })
// console.log(arr4);

// console.log(arr);

// let arr5=arr.filter(function(x){
//     return x<-2;
// })
// console.log(arr5);
// //-----------------reduce array method

// function product(a,b){
//     return a*b;
// }
// arr5=[1,2,3,4,5];
// let prod_of_arr=arr5.reduce(product);
// console.log(prod_of_arr);

// function add(a,b){
//     return a+b;
// }
// let array5=arr5.reduce(add);
// console.log(array5);

// arr5.filter()
//------find method
let array=[1,7,2,3,9]
let found=array.find(function(ele){
    return ele>4;
});
console.log(found);
//findindex method returns the first index of the element satisfying the condition

//odd(findindex method)
function isodd(element,index,array){
    return (element % 2==1);
}
console.log(array.findIndex(isodd));

//even
function iseven(element,index,array){
    return (element%2==0)
}

//every and some methods
console.log(array.findIndex(iseven));
console.log(array.some(isodd));
console.log(array.every(iseven));
console.log(array.flat(2));
//flatmap
const var1=array.flatMap((x)=>x*2);
console.log(var1);

//true or false in case of codition

const var2=array.flatMap((x)=>x+1);
console.log(var2);

const fruits=["banana","orange","apple","mango"];
// //console.log(fruits.sort());
// console.log(fruits.toSorted());

console.log(Math.min.apply(null,array));
console.log(Math.max.apply(null,array));
console.log(5%2);
console.log(5/2);
const isevn=n=>n%2===0;
console.log(isevn(4));





