
// class Car{
//     constructor({title}){
//         this.title=title;
//         console.log(title);
//     }    
//     drive(){
//         return 'vroom';
//     }
// }
// //const car= new Car({title:'toyota'});
// //console.log(car.drive());
// //console.log(car);
// class Toyota extends Car{
//     constructor(options){
        
//         super(options);
//         this.color= options.color;
        
//     }
//     honk(){
//         return 'honk';
//     }
// }
// const t1=new Toyota({color:'red',title:'abc'});
// console.log(t1.honk());
// console.log(t1)

// //for of loops

// // const colors=['red','green','blue'];
// // for(let color of colors){
// //     console.log(color);
// // }

// //generators


// function* shopping(){

//     const stufffromstore=yield 'cash';
//     const cleanClothes=yield 'laundry';
//     return ['stufffromstore','cleanClothes'];
// }
// //console.log(numbers());
// const gen=shopping();
// console.log(gen.next());
// console.log(gen.next('groceries'));
// console.log(gen.next('cleanClothes'));
// //console.log(gen.next());
// function* colors(){
//     yield 'red';
//     yield 'blue';
//     yield 'green';
// }
// const mycolors=[];
// for(let color of colors()){
//     mycolors.push(color);
// }
// console.log(mycolors);
// const engeneeringteam={
//     size:3,
//     department:'engeneering',
//     lead:'alex'
// };
// function* teamiterator(team){
//     yield team.size;
//     yield team.lead;
//     yield team.department;
//   //  const ttgenerator=testingiterator(team.testingteam);
//  //  yield* ttgenerator;
// }

// const names=[];
// for(let name of teamiterator(engeneeringteam)){
//     names.push(name);
// }
// console.log(names);

// //promises excecute some mount/callback function when some reques
// //or some long running process gets completed
// //promises callback function gets executed when some request or methods gets executed perfectly
// //gets automatically called whenever some process gets excecuted
// //resolved=>then (callback function)
// //rejected=>catch(callback)
// //then and catch are properties that sit on top of our object
// //gets automatically called based on the process
// promise=new Promise((resolve,reject)=>{
//     //var request=new XMLHttpRequest()
//     setTimeout(()=>{
//         resolve();
//     },3000);
// });
// //console.log(promise);
// promise.then(()=>console.log("finished"))
//         .then(()=>console.log('i also ran'))
//         .catch(()=>console.log("uh ohh!"));
// //async await
// //async is a function that returns a promise
// //makes code more readable

// moveplayer=new Promise(100,'left')
//     .then(()=>moveplayer(400,'left'))
//     .then(()=>moveplayer(10,'right'))
//     .then(()=>moveplayer(330,'left'))
// //async is just syntactic sugar
// async function playerstart(){
//     const first= await moveplayer(100,'left');
//     const second= await moveplayer(400,'left');
//     await moveplayer(10,'right');
//     await moveplayer(330,'right');
// }
// //
// async function fetchUers(){
//     const resp=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await resp.json();
//     console.log(data);
// }

// const urls=[
//     'https://jsonplaceholder.typcode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]
// const getdata=async function(){
//     try{
//         const[users,posts,albums]=await promise.all(urls.map(url=>
//             fetch(url).then(resp=>resp.json())
//             ))
//             console.log('users',users)
//             console.log('posts',posts);
//             console.log('posts',albums);
//         }
//         catch(err){
//             console.log(err);
//           }
//           try{
//             const[users,posts,albums]=await promise.all(urls.map(url=>
//                 fetch(url).then(resp=>resp.json())))
//                 console.log('users',users);
//                 console.log('albums',albums);
//                 console.log('posts',posts);
//           }
//           catch(err){
//             console.log(err);
//           }

// }
//object.create()
// const elffunctions={
//     attack(){ 
//         console.log( 'attack with ' + this.weapon);
//     }
// }
// class Elf{
// constructor(name,weapon)
//     {
//         this.name=name;
//         this.weapon=weapon;
//     }
//     attack(){
//         return 'attack with '+this.weapon
//     }
// }
// Elf.prototype.attack=function(){
//     return 'attack with '+this.weapon
// }
// Elf.prototype.build=function(){
//     return 'Building by '+this.name
// }

// const peter = new Elf('Peter','stones');
// console.log(peter.name);
// console.log(peter.attack());
// const sam = new Elf('Sam','sword')
// console.log(sam.name)
// console.log(sam.attack());
//console.log(Elf.prototype);
//code to  invoke
//console.log(sam.weapon);
// Number()
// Object
// Functions
// class car{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }
//     drive(){
//         console.log('this car is driven by '+this.name);
//     }
// }
// const c1=new car('BMW','BLUE');
// console.log(c1.color);
// console.log(c1.name);
// c1.drive();

class Character{
    constructor(name,weapon)
        {
            this.name=name;
            this.weapon=weapon;
        }
        attack(){
            return 'attack with '+this.weapon
        }

    }

class Elf extends Character{
    constructor (name,weapon,type){
        super(name,weapon);
        this.type=type
        console.log('attack with '+weapon)
        console.log('building a '+type)
    }

    }
    
    const peter = new Elf('Peter','stones','house');
   // console.log(peter);
    //console.log(peter.attack());
    //console.log(peter.type);
    //const sam = new Elf('Sam','sword')
    //console.log(sam.name)
    //console.log(sam.attack());
class objectCreator{
    #meaningoflife;
    constructor(name){
        this.#meaningoflife=42;
    }
    returnmeaningoflife(){
     return this.#meaningoflife;   
    }
    #returnmessage(){
        return "you will do great things in life";
    }
    returnmsg(){
        console.log('function execution completed');
    }
}
const myobj= new objectCreator("jhon");
console.log(myobj.returnmeaningoflife());
//console.log(myobj["#meaningoflife"]);
//console.log(myobj.returnmsg());
myobj.returnmsg();
class Namegenerator{
    _name;
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let namegenerator=new Namegenerator("jhon");
console.log(`my name is ${namegenerator.name}`);
namegenerator.name="jane";

function Base(param1,_){
    var _this=this;
    var shared=_||{};
    this.foo="anyone can access this!";
    shared.bar=function(){
        console.log(secret());
        return "shared function accessed"
    }
    var secret =function(){
        return _this.foo;
    };
}
function derived(param1){
    var shared={};
    Base.call(this,param1,shared);
    console.log(shared.bar());
}
var mybase= new Base("param1");
var myderived= new derived("param1");
myfunc=(name)=>{
    console.log(name);
}
const CharacterRemoval=(strArr)=>{
    let word=strArr[0]
    let dict=strArr[1]
    let dictArr=dict.split(',')
    let min=Number.MAX_VALUE
    dictArr=dictArr.sort((a,b)=>b.length-a.length)
    for(let i=0;i<dictArr.length;i++)
    {
        let newword=word;
        let curr=dictArr[i]
        let currAr=curr.split('')
        for(let j=0;j<currAr.length;j++){
            if(newword.indexOf(currAr[j])!=-1){
                let index=newword.indexOf(currAr[j]);
                newword=newword.slice(0,index)+newword.slice(index+1,newword.length)
            }
        }
        if(min>newword.length){
            min=newword.length
        }
    }return min
}
let ans1 = CharacterRemoval([
	'baseball',
	'a,all,b,ball,bas,base,cat,code,d,e,quit,z',
])
console.log(ans1);

const splitWordIntoTwo=(strarr)=>{
    const word=strarr[0]
    const wordarr=strarr[1].split(',')
    const newarr=[]
    for(let i=0;i<wordarr.length;i++){
        for(let j=0;j<wordarr.length;j++){
            if(wordarr[i]+wordarr[j]===word){
                newarr.push(wordarr[i])
                newarr.push(wordarr[j])
            }
        }
    }
    return newarr.toString()
}
const strArr1 = ['powerhouse', 'p,pow,power,house,pose,poser']
console.log(splitWordIntoTwo(strArr1));
const strArr2 = ['baseball', 'b,ba,base,ball,baseba,all']
console.log(splitWordIntoTwo(strArr2));

const sumElements=(strArr)=>{
    const arrele1=strArr[0].substr(1,strArr[0].length-2).replaceAll('','').split(',')
    const arrele2=strArr[1].substr(1,strArr[1].length-2).replaceAll('','').split(',')
    let maxlen=arrele1.length>=arrele2.length?arrele1:arrele2
    let minlen=arrele1.length<=arrele2.length?arrele1:arrele2
    let strans=''
    for(let i=0;i<maxlen.length;i++){
        if(i<minlen.length){
            let sum=Number.parseInt(maxlen[i])
            strans+=sum+'-'
            sum=0;
        }else{
            strans+=maxlen[i]+'-'
        }
    }
    return strans.substring(0,strans.length-1)

}
const strArr = ['[1, 2, 3, 10, 5]', '[1, 2, 3, 10, 5 ,11]']
console.log(sumElements(strArr));

console.log(sumElements('[2,3,4]','[54,5,6]'));
console.log(sumElements(['[3,6,7]','[8,9,5]']));
//console.log(sumElements(['[4,5,6]','[6,7,9]']));


const strarr1 = ['powerhouse', 'p,pow,power,house,pose,poser']
console.log(splitWordIntoTwo(strArr1));

const strops=(str)=>{
    let numsum=0;
    let strlength=0;
    str.split('').forEach((item) => {
        if(item.match(/[0-9]/))numsum=numsum+Number(item)
        else if(item.match(/[a-zA-Z]/)) strlength=strlength+1
    });
    return Math.round(numsum/strlength)
}
const str1='hello5,22-23,defg'
const str2='1o1o5,2e3d6fg9jhvjhv32s2'
console.log(strops(str1));
console.log(strops(str2));
const array1=(arr1)=>{
    const parts=arr1.slice(-4,-2)
    console.log(parts);
}
//console.log(array1([1,2,3,4,5,6]));

array1([6,7,4,2,1]);

function arrayaddition(arr){
    var target;
    var addarr=arrayprep(arr);
    var len=addarr.length;
    var pername=Math.pow(2,len);
    console.log('test0',pername,target,addarr);
    for(var i=0;i<=pername;i++){
        perstr=(i).toString(2);
        strlen=perstr.length;
        var counter=0;
        for(let j=0;j<strlen;j++){
            if(perstr[j]==='1'){
                counter+=addarr[j];
            }
        }
        if(counter===target){
            return true
        }
    }return false
    function arrayprep(arr2){
        arr.sort(function(a,b){
            return a-b
        });
        target =arr2.pop()
        return arr2
    }
}
arrayaddition([2,3,4,5,6]);