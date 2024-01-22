// let A=new Date();
// console.log(A);
// let B= new Date('August 31,2001');
// console.log(B);
// const future=new Date(2024,1,10);
// console.log(future);
// const calcDaysPassed=(date1,date2)=>Math.abs(date2-date1)/(1000*3600*24);
// const days1=calcDaysPassed(new Date(2024,1,10),new Date(2024,2,12));
// console.log(days1);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// //console.log(future.getTime());
// console.log(Date.now());
// const indate=new Intl.DateTimeFormat('en-IN').format();
// console.log(indate);
// const usdate= new Intl.DateTimeFormat('en-US').format();
// console.log(usdate);
// const ardate=new Intl.DateTimeFormat('ZH-CN').format();
// //console.log(ardate.getUTCDate());
// const usnum=new Intl.NumberFormat('de-DE').format();
// //console.log(usnum);
// //setTimeout(()=>console.log("HERE IT IS"),3000);
// console.log('waiting...');
// //setTimeout(()=>console.log("here it is AGAIN"),5000);
// const ingrediants=['olives','garic'];
// const pizzatimer=setTimeout((ing1,ing2) => {
//     console.log(`here is your pizza with ${ing1} and ${ing2}`);
// }, 3000,...ingrediants);
// if(ingrediants.includes('cheese'))clearTimeout(pizzatimer);


// //object oriented rpogramming in js
// //creating constructor functions
// const Person=function(firstname,birthyear){
//     this.firstname=firstname;
//     this.birthyear=birthyear;

// }
// const jonas=new Person('jonas',2001);
// console.log(jonas);
// let numbers=[1,2,3];
// var doublen=[];
// for(var i=0;i<numbers.length;i++)
// {
//     doublen.push(numbers[i]*2);
// }
// console.log(doublen);
var colors=['red','green','blue'];

//foreach helper

for(var i=0;i<colors.length;i++)
{
    //console.log(colors[i]);
 }
// colors.forEach(function(color){
//     console.log(color);
// })
colors.forEach(function(color){
    console.log(color);
})

var numbers=[1,2,3,4,5]
var sum=0;
function adder(num){
    sum+=num;
}
numbers.forEach(adder);
console.log(sum);

//map helper

var numbers=[1,2,3];
var doublenumbers=[];
// for(var i=0; i<numbers.length;i++){
//     doublenumbers.push(numbers[i]*2);
// }
// console.log(doublenumbers);

var doubled= numbers.map(function(number){
    return doublenumbers.push(number*2);
})
console.log(doubled);

console.log(doublenumbers);

var cars=[{
model: 'swift', price :'cheap'
},
{ model: 'dzire', price :'expensive'
}
];
var prices=cars.map(function(car){
    console.log(`${car.model}=>${car.price}`)
});

//filter helper

var products=[
    {name:'banana' ,type:'fruit',qty:'0',price:'1'},
    {name:'carrot', type:'veggies',qty:'12',price:'99'},
    {name:'apple' ,type:'fruit',qty:'30',price:'13'},
    {name:'celery', type:'veggies',qty:'3',price:'5'}
];
var filteredProducts=[];

function isEven(value) {
    return value % 2 == 0;
}
 
let filtered = [11, 98, 31, 23, 944].filter(isEven);
console.log(filtered);

const pfilter=products.filter(function(p){
    return p.type==='veggies' 
    && p.qty>0 
    && p.price<10;
});
console.log(pfilter);

//find helper

var users=[
    {name:'jill'},
    {name:'alex'},
    {name:'kia'}
];

var user;

const varr=users.find(function(user){
   return user.name==='alex';
}
);

console.log(varr);

//every and some

var products=[
    {name:'banana' ,type:'fruit',qty:'0',price:'1'},
    {name:'carrot', type:'veggies',qty:'12',price:'99'},
    {name:'apple' ,type:'fruit',qty:'30',price:'13'},
    {name:'celery', type:'veggies',qty:'3',price:'5'}
];
const moreprice=products.every(function(prod){
    return prod.price>0;
})
console.log(moreprice);

const lessqty=products.some(function(prod){
    return prod.qty>10;
})
console.log(lessqty);


//reduce helper

var numbers=[10,20,30];
var sum=0;
const addition=numbers.reduce(function(sum,num){
    return sum+num;
},0)
console.log(addition);

let primarycolors=[
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
];
let rcolors=primarycolors.reduce(function(prev,pri){
    prev.push(pri.color);
    return prev;
},[]);
console.log(rcolors);

function balancedParens(string){
    return !string.split("").reduce(function(prev,char){
        if(char==="("){return ++prev;}
        if(char===")"){return --prev;}
        return prev;
    },0);
}
const chk=balancedParens("(()");
console.log(chk);

//template literals
function getmessage(){
    const year=new Date().getFullYear();
    return `the year is ` +year;
}
console.log(getmessage());
const carss={
    models:['bmw','audi'],
    brand_name:['tata'],
    carsummury:function(){
        return this.models.map((car)=>{
            return `${car} is of name ${this.brand_name}`;
        });
    }
};
console.log(carss.carsummury());

//object literals
function createbookshop(inventory){
    return{
        inventory,
        inventoryvalue(){
            return this.inventory.reduce((total,book)=>total+book.price,0);
        },
        pricefortitle(title){
            return this.inventory.find(book=>book.title===title).price;
        }
    };
}
const inventory=[{
    title:'harry potter',price:10
},
{title:'javascript',price:90}
];
const bookshop=createbookshop(inventory);
console.log(bookshop.inventoryvalue);
console.log(bookshop.pricefortitle('harry potter'));

// function savefile(url,data){
//     $.ajax({method:'POST',url,data});
// }
// const url="httpl://fileupload.com";
// const data={color:'red'};
// console.log(savefile(url,data));

//default function arguments
function makeajaxrequest(url,method='GET'){
        return method;   
}
const a1=makeajaxrequest('google.com');
console.log(a1);
const b1=makeajaxrequest('google.com','POST');
console.log(b1);

function User(id){
    this.id=id;
}
function generateId(){
    return Math.random()*999;
}
function createAdminUser(user=new User(generateId())){
    user.admin=true;
    return user;
}
createAdminUser(new user(generateId()));
const userr= new User(generateId());
console.log(createAdminUser(userr));
// console.log(new User(generateId));