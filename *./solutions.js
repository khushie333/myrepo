// function firstreverse(str){
//     let arr= str.split(' ');
//     arr.reverse();
//     return arr.join('');
// }
// const result=firstreverse('khushi d pithadia');
// console.log(result);
// let text="apple, lime,kiwi";
// let part=text.slice(7,12);
// console.log(part);
// let array1=["apple","lime","lemon"];
// let array2=[1,2,3,4,5];
// // const fruits=array1.slice(1,2);
// // console.log(fruits);
// const arr=[1,2, ...[3,4]];
// console.log(arr);

// const [a,b,c,...others]=[1,2,3,4,5];
// console.log(a,b,c,others);
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

// const {sat,...wekdays}=week.opening;
// console.log(wekdays);
// const add=function(...nums){
//     let sum=0;
//     for(let i=0;i<nums.length;i++)
//     {
//         sum+=nums[i];
        
//     }
//     //console.log(nums);
//     console.log(sum);
// };

// add(2,3,4,5);
// for(const item of array1) console.log(item);
// for(const prod of array2) console.log(prod);
// for(const [i,el] of array1.entries())
// {
//     console.log(`${i+1}:${el}`);
// }
// const week1=week.order(5);
// function fun1(...args)
// {
//     console.log('arguments',args);
//     console.log(Array.from(arguments));
//     return`${args[0]} and ${args[1]}`;
// }
// const f1=fun1('tim','tina');
// console.log(f1);

// function weird()
// {
//     height=50;
//     return height;
// }
// const w1=weird();
// console.log(w1);
// function aloop()
// {
//    for(var i=0;i<=5;i++)
//    {
//     console.log(i);
//    }
//    console.log('final',i)
// }

// aloop();
// console.log(typeof aloop);
// console.log(Array.isArray(["a","b"]));
// var str="5";
// var str=5;
// let str1=str;
// str1++;
// console.log(str1);
// var c1=[1,2,3,4,5];
// var b1=[].concat(c1);
// c1.push(3534346);
// console.log(b1);
// console.log(c1);

// b1.pop();
// console.log(b1);
// console.log(c1);
// let obj={a:'a',
//     b:'b',
//     c:{
//         deep:'try and copy'
// }};
// let clone=Object.assign({},obj);
// let clone2={...obj};

// obj.c.deep='hahaha';
// console.log(obj);
// console.log(clone2);
// const giveaccessto=(user)=>
//         'access granted to the user ' + user;
// function authenticate(verify){
//     let array=[];
//     for(let i=1;i<verify;i++)
//     {
//         array.push(i);
//     }
//     return true;
// }
// function letperson(person,fn){
//     if(person.level==='admin'){
//         fn(500000)
//     }
//     else if(person.level==='user')
//     {
//         fn(1000000)
//     }
//     return giveaccessto(person.name);
// }
// let f=letperson({level:'user',name:'tim'},authenticate)
// console.log(f);
// function letuserlogin(user)
// {
//     let array=[];
//     for(i=0;i<100000000;i++)
//     {
//         array.push(i)
//     }
//     return giveaccessto(user);
// }
// const v= letuserlogin('eva');
// console.log(v);
// const multiplyby=function(num1){
//     return function(num2){
//         console.log( num1*num2);
//     }
// }
// const multiplyby=(num1)=>(num2)=> console.log(num1*num2);
// const multiplybytwo=multiplyby(15);
// multiplybytwo(8);

//let var2=multiplyby(4,6);
//console.log (var2);
function a()
{
    let grandpa='grandpa'
    return function b()
    {
        let father='father'
        return function c()
        {
            let son='son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
const r=a()()();
console.log(r);
const fun=(string)=>(name)=>(name2)=>
    console.log(`${string} ${name} ${name2}`)
fun('hi')('tim')('becca');

// function callmemaybe(){
//     setTimeout(function() {
//         console.log(callme);
//     }, 4000);
//     const callme='hi i am now here';
// }

//callmemaybe();
const array=[];

let object1={
    name:'abc',
    fire:true,
    fight()
    {
        console.log(4);
    },
    sing(){
        if(this.fire){
            console.log(`i am ${this.name}`);
        }
    }
}

let object2={
    name:'pqr',
    fight()
    {
        console.log(5);
    }
}

object2.__proto__=object1;
//console.log(object2.fire);
//object1.isPrototypeOf(object2);
for(let prop in object2){
    if(object2.hasOwnProperty(prop))
    {
        console.log(prop)
    }
}
Object.prototype.__proto__

const array3=[]
console.log(array3.__proto__.hasOwnProperty('map'));
const week={
        opening:{
        sat:{
            open:11,
            close:23,
        },
        mon:{
            open:10,
            close:24,
        },
        fri:{
            open:11,
            close:23,
        },
        },
        order(a){
            console.log(a);
        },
    }
    // for(const day of Object.keys(week)){
    //    // console.log(day);
    // }
    // const weekdays=week.opening;
    // console.log(weekdays);
    // for(const day of Object.keys(weekdays)){
    //     console.log(day);
    // }
    // const properties=Object.keys(weekdays);
    // console.log(properties);
    
    // const values= Object.values(weekdays);
    // console.log(values);
    let arr=['a','b','c','d','e'];
    console.log(arr.slice(2));
    console.log(Math.abs(-4.7));
    console.log(Math.ceil(4.4));
    console.log(Math.floor(4.4));
    console.log(Math.sin(90 * Math.PI / 180));
    console.log("Math.random(): " + Math.random());
    console.log(Math.min(0,150,40,50,23));
    console.log(5%2);
    console.log(5/2);




    












