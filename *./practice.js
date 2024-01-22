// const firstName='khushi';
// console.log(firstName);
// switch(firstName)
// {
//     case 'khushi':
//         console.log('your sname is khushi');
//         break;
//     case 'kishan':
//         console.log('your name is kishan');
//         break;
//     default:
//         console.log('welcome' , firstName);
//         break;
// }
//function declaration
// function logger(a,b)
// {
//    const logs=`log with ${a} and${b}`;
//    return logs;
// }
// const val=logger(2,3);
// console.log(val);
//function expression
// const calAge=function(birthyear)
// {
//     return 2023-birthyear;
// }
// const age=calAge(2001);
// console.log(age);
// const calage2= birthyeah=> 2024-birthyeah;
// const age2= calage2(2000);
// console.log(age2);

// const yearsUntilRetirement=birthyeah=>{
//     const age3=2024-birthyeah;
//     const retirement=62-age3;
//     return retirement;
// }
// console.log(yearsUntilRetirement(2001));
// function cutfruitpieces(fruit)
// {
//     return fruit*4;
// }
// function fruitprocessor(apples,oranges){
//     const applepi=cutfruitpieces(apples);
//     const orangepi=cutfruitpieces(oranges);
//     const juice=`juice with ${applepi} and ${orangepi}`;
//     return juice;
// }
// console.log(fruitprocessor(2,3));
// const calAverage= (a,b,c)=>(a+b+c)/3;
// console.log(calAverage(3,4,5));
// const dol=calAverage(12,20,14);
// const koa=calAverage(20,40,60);
// console.log(dol,koa);
// const checkwinner=function(dol,koa)
// {
//     if(dol>=2*koa)
//     {
//         console.log("dols are winner");
//     }
//     else if(koa>=2*dol)
//     {
//         console.log("koalas are winner");
//     }
//     else{
//         console.log("its a tie");
//     }
// }
// checkwinner(dol,koa);
// const cars=['audi','bmw','altroz'];
// cars.push('jaguar');

// cars.unshift('swift');
// cars.pop();
// cars.pop();
// cars.shift();
// console.log(cars);
// console.log(cars.indexOf('bmw'));
// console.log(cars.indexOf('audi'));
// console.log(cars.includes('swift'));
// const karray= [
//     'khushi',
//     'pithadia',
//     2024-2001,
//     'software',
//     ['audi','bmw','altroz']
// ];
// const person={
//     fname: 'khushi',
//     lname: 'pithadia',
//     age: 2001,
//     cars: ['audi','bmw','altroz'],
    
// };

// console.log(karray);
// console.log(person);
// console.log(person.lname);
// console.log(person['age']);
// const namekey='name';
// console.log(person['f' + namekey]);
// console.log(person['l'+ namekey]);
// console.log(person.cars[1]);
// console.log(person.calcage());
// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
//const types=[];
// for(let i=0;i<karray.length;i++)
// {
//     console.log(karray[i],typeof karray[i]);
//     types[i]=typeof karray[i];

// }
//console.log(types);

// const years=[1991,1995,2001,2000,2002];
// const ages=[];
// for(let i=0;i<years.length;i++){
//     ages.push(2024- years[i]);
// }
// console.log(ages);
// for(let i=karray.length-1;i>=0;i--)
// {
//     console.log(karray[i]);
// }
// let j=0;
// while(j<karray.length){
//     console.log(karray[j]);
//     j++;
// }
// let min,max;
// let dice=Math.trunc(Math.random() * (5-1)) + 1;
// console.log(dice);
// const calAverage=function(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(calAverage([2,3,7]));

// const person1={
//     firstname:"khushi",
//     lastname:"pithadia",
//     fullname:function(){
//         return this.firstname + " " + this.lastname;
//     }
// }
// const person2={
//     firstname: "jhon",
//     lastname: "doe",
// }

// console.log(person1.fullname.bind(person2));
// let a=23;
// let b=48;
// const obj={a:7,b:6,c:8};
// ({a,b}=obj);
// console.log(a,b);

// const q1=[8,9,10];
// const q2=[5,6,7];
// const q3=[...q2,...q1];
// console.log(q3);


//arguments with rest and spread operators

//spread operator
// function addnumbers(...numbers){
//     return numbers.reduce((sum,num)=>{
//         return sum+num;
//     },0);
// }
// console.log(addnumbers(4,8,9,1,2,3,4,5));
// const  defaultclors=['orange','yellow'];
// const favcolors=['orage','yellow'];
// console.log(['blue',...defaultclors,...favcolors]);

//rest operator 

// function validateshoppinglist(...items)
// {
//     if(items.indexOf('milk')<0){
//         return ['milk',...items];
//     }
//     return items;
// }
// console.log(validateshoppinglist('oranges','bread','eggs'));

// const mathlibrary={
//     calculatemathlibrary(...rest){
//         console.log('please use the multiply method insetad');
//         return this.multiply(...rest);
//     },
//     multiply(a,b){
//         return a*b;
//     }
// }
//destructuring

// const expense={
//     type: 'buisness',
//     amount:'$45 usd'
// };
// //var type= expense.type;
// //var amount=expense.amount;
// //console.log(type);

// const{type,amount}=expense;
// //console.log(type,amount);
// console.log(type,amount);

// console.log(typeof type);

// var savedfile={
//     extension:'.jpeg',
//     name:'repost',
//     size:14040
// }
// function filesummary({extension,name,size},{color}){
//     console.log(`${color},${extension},${name},${color}`);
// }
// filesummary(savedfile,{color:'red'});
// const [name1,name2]=defaultclors;
// console.log(name1,name2);
// const[name3,...rest]=karray;
// console.log(name3,rest);
// const google={
//     locations:['NY','LA','LV'],
// };
// const {locations:[location1,location2,location3]}=google;
// console.log(location1,location2,location3);
// function signup(username,password,email,dob,city){

// }
// signup('myname','mypass','myemai@123.com','dob','surat');
//converting arrays into objects
// const points=[[4,5],[1,2],[3,4]];
// const point=points.map(([x,y])=>{
// return {x,y};
// });
// console.log(point);
// function vehi(options){
//     this.title=options.title;
// }
// vehi.prototype.drive=function(){
//     return 'vroom';
// }
// const vehicle=new vehi({title:'focus'});
// console.log(vehicle.drive());
// console.log(vehicle);

function secondgreatlow(arr){
    arr=arr.slice().sort((a,b)=>a-b);
    let second=arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[0]){
            second=arr[i];
            break;
        }
    }
    let greatest=arr[arr.length-2];
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]!==arr[arr.length-1]){
            greatest=arr[i];
            break;
        }
    }
    return second+' '+greatest;
}
console.log(secondgreatlow([7, 7, 12, 98, 106]));

//division stringified

function divisionstringified(num1,num2){
    var res=Math.round(num1/num2);
    var string=res.toString();
    var numleng=string.length;
    var newstring= string;
    if(numleng>3){
        var arr=string.split("");
        for(var i=numleng-3;i>0;i=i-3){
            arr.splice(i,0,",");
        }
        var newstring=arr.join("");
    }
    return newstring;
}
console.log(divisionstringified(123456789,10000));
function countingminiutes(str){
    let times=str.split('-');
    var from=times[0],to =times[1];
    function parseminiutes(timestr){
        var time=timestr.match(/d+/g);
        var hour=parseInt(time[0]),miniute=parseInt(time[1]);
        var ampm=(timestr.match(/[a|p]m/g)[0]==='am')?0:1;
        if(hour===12)hour=0;
        return (hour+ampm*12)*60+miniute;
    }
    var fromminiutes=parseminiutes(from),tominiutes=parseminiutes(to);
    var difference=tominiutes-fromminiutes;
    var onedayminiutes=24*60;
    return (difference<0)?onedayminiutes+difference:difference;
}
console.log(countingminiutes("12:30pm-12:00am"));