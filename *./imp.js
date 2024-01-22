function mathChallenge(str){
    var x=0;
    var temp=str.replace('x',x);
    var arr=str.split('=');
    while(eval(arr[0])!==eval(arr[1])){
        x++;
        temp=str.replace('x',x);
        arr=str.split('=');
    }
    return x
    }

    console.log(mathChallenge('4-2=x'));
//question 3
const ArrayChallenge=(strarr)=>{
    let arr1=strarr.sort((a,b)=>b.length-a.length);
    console.log(arr1[2]);
}
const arr1 = ['hello', 'world', 'before', 'all'];

ArrayChallenge(arr1);
console.log(ArrayChallenge(arr1));

//question 4
const strop=(str)=>{
    let numsum=0;
    let strLength=0;
    str.split('').forEach(item => {
        if(item.match(/[0-9]/)) numsum=numsum+Number(item);
        else if(item.match(/[a-zA-Z]/)) strLength=strLength+1;
    });
    return Math.round(numsum/strLength)
}
const str2 = '1o5,2e3d6fg9jhvjhv32s2'
console.log(strop(str2));

//question 5
const CharacterRemoval=(strArr)=>{
   let word=strArr[0];
   let dict=strArr[1];
   let dictArr=dict.split(',')
   let min=Number.MAX_VALUE
   dictArr=dictArr.sort((a,b)=>b.length-a.length)
   for(let i=0;i<dictArr.length;i++){
        let newword=word;
        let curr=dictArr[i];
        let currArr=curr.split('')
        for(let j=0;j<currArr.length;j++){
            if(newword.indexOf(currArr[j])!=-1)
            {
                let index=newword.indexOf(currArr[j]);
                newword=newword.slice(0,index)+newword.slice(index+1,newword.length)
            }
        }
        if(min>newword)
        {
            min=newword.length
        }
   }
   return min;
}
let ans1=CharacterRemoval(['baseball',
'a,all,ball,base,d,e,quit,z']);
console.log(ans1);

//question 6
const splitWordIntoTwo=(strArr)=>{
    const word=strArr[0];
    const wordarr=strArr[1].split(',');
    const newArr=[]
    for(let i=0;i<wordarr.length;i++){
        for(let j=0;j<wordarr.length;j++){
            if(wordarr[i]+wordarr[j]===word){
                newArr.push(wordarr[i]);
                newArr.push(wordarr[j]);
            }
        }
    }
    return newArr.toString()
}
const strArr1=['powerhouse','p,pow,power,house,pose,poser'];
console.log(splitWordIntoTwo(strArr1));
const strArr2=['baseball','b,ba,base,ball,baseba,all'];
console.log(splitWordIntoTwo(strArr2));

//question 7
// const sumElements=(strar)=>{
//     const[first,second]=strar
//     const arr1=eval(first)
//     const arr2=eval(second)
//     let add;
//     if(arr1.length>arr2.length){
//         add=arr1.map((val,index)=>{
//             return arr2[index]?arr2[index]+val:val
//         })
//     }else{
//         add=arr2.map((val,index)=>{
//             return arr1[index]?arr1[index]+val:val
//         })
//     }
//     return add.join("-")
// }
// console.log(sumElements('[1,2,3,4,5]','[,7,8,8,9,7]'));
// console.log(sumElements('[34,34,676,23,576]','[3,4,6,7,4]'));
const sumElements=(strarr)=>{
    const arrele1=strarr[0].substr(1,strarr[0].length-2).replaceAll('','').split(',')
    const arrele2=strArr[1].substr(1,strArr[1].length-2).replaceAll('','').split(',')
    let maxlen=arrele1.length>=arrele2.length?arrele1:arrele2
    let minLen=arrele1.length<=arrele2.length?arrele1:arrele2
    let strans=''
    for(let i=0;i<maxlen.length;i++){
        if(i<minLen.length){
            let sum=Number.parseInt(maxlen[i]);
            strans+=sum+'-'
            sum=0;
        }else{
            strans+=maxlen[i]+'-'
        }
    }
    return strans.substring(0,strans.length-1)
}
const strArr = ['[1, 2, 3, 10, 5]', '[1, 2, 3, 10, 5 ,11]'];
console.log(sumElements(strArr));

//question 7 solution 2
function addele(strarr){
    const [first,second]=strarr;
    const arr1=eval(first);
    const arr2=eval(second)
    let add
    if(arr1.length>arr2.length){
        add=arr1.map((val,index)=>{
            return arr2[index]?arr2[index]+val:val;
        }) }
        else{
            add= arr2.map((val,index)=>{
                return arr1[index]?arr1[index]+val:val
            })
        }
        return add.join('-');   
}
console.log(addele(['[5, 2, 3]', '[2, 2, 3, 10, 6]']))
function addelements(strarr){
    const[first,second]=strarr;
    const arr1=eval(first);
    const arr2=eval(second);
    let add
    if(arr1.length>arr2.length){
        add=arr1.map((val,index)=>{
            return arr2[index]?arr2[index]+val:val;
        })}
        else{
            add= arr2.map((val,index)=>{
                return arr2[index]?arr2[index]+val:val
            })
        }
        return add.join('-');
    }
    console.log(addelements(['[4,5,6]','[6,7,3,3]']));
    console.log(addelements(['[2.6,5.6,6]','[67,7.8,5,3]']));
    console.log(add)
    console.log(arr1);
    console.log(arr2);
    
