
// function mathchallenge(str){
//     let x=0;
//     let temp=str.replace('x',x);
//     let arr=str.split('=');
//     while(eval(arr[0]!==eval(arr[1]))){
//         x++;
//         temp=str.replace('x',x);
//         arr=str.split('=');
//     }
//     return x;
// }
// const thirdlargest=(arr)=>{
//     arr=arr.sort((a,b)=>b.length-a.length);
//     return arr[2];
// }
// const arr1=["hello", "world", "after", "all"];
// console.log(thirdlargest(arr1));

// const strops=(str)=>{
//     let numsum=0;
//     let strlen=0;
//     str.split('').forEach((item)=>{
//         if(item.match(/[0-9]/g)) numsum=numsum+Number(item)
//         else if(item.match(/[a-zA-Z]/)) strlen=strlen+1;
//     })
//     return Math.round(numsum/strlen);
// }
// const str1 = '1o5,2e3d6fg9jhvjhv32s2';
// console.log(strops(str1));

// const characterremoval=(strarr)=>{
//     let word=strarr[0]
//     let dict=strarr[1]
//     let dictarr=dict.split(',')
//     let min=Number.MAX_VALUE
//     dictarr=dictarr.sort((a,b)=>b.length-a.length)
//     for(let i=0;i<dictarr.length;i++){
//         let newWord=word;
//         let curr=dictarr[i]
//         let currarr=curr.split('')
//        // console.log(currarr[0]);
//        for(let j=0;j<currarr.length;j++){
//             if(newWord.indexOf(currarr[j])!= -1){
//                 let index=newWord.indexOf(currarr[j])
//                 newWord=newWord.slice(0,index)+newWord.slice(index+1,newWord.length)
//             }
//        }
//        if(min > newWord.length){
//             min=newWord.length
//        }
//     }
//     return min
// }
// console.log(characterremoval([
// 	'baseball',
// 	'a,all,b,ball,bas,base,cat,code,d,e,quit,z',
// ]));
// const splitintotwo=(strarr)=>{
//     const word=strarr[0]
//     const wordarr=strarr[1].split(',')
//     const newarr=[]

//     for(let i=0;i<wordarr.length;i++){
//         for(let j=0;j<wordarr.length;j++){
//             if(wordarr[i]+wordarr[j]===word){
//                 newarr.push(wordarr[i])
//                 newarr.push(wordarr[j])
//             }
//         }
//     }
//     return newarr.toString()
// }
// const strArr1 = ['powerhouse', 'p,pow,power,house,pose,poser']
// console.log(splitintotwo(strArr1));

// function addele(str){
//     const [first,second]=str
//     const arr1=eval(first)
//     const arr2=eval(second)
//     let add
//     if(arr1.length>arr2.length){
//         add=arr1.map((val,index)=>{
//             return arr2[index]? arr2[index]+val : val
//         })
//     }else{
//         add= arr2.map((val,index)=>{
//             return arr1[index]?arr1[index]+val:val
//         })
//     }
//     return add.join('-')
// }
// console.log(addele(['[1, 2, 1]', '[2, 1, 5, 2]']));

function mathchallenge(str){
    let x=0;
    let  temp=str.replace('x',x);
    let arr=str.split('=')
    while(eval(arr[0])!==eval(arr[1])){
        x++;
        temp=str.replace('x',x);
        arr=str.split('=');
    }
    return x;
}
const thirdlargest=(arr)=>{
    arr=arr.sort((a,b)=>b.length-a.length);
    return arr[2];
}
const strops=(str)=>{
    let numsum=0;
    let strlen=0;
    str.split('').forEach((item)=>{
        if(item.match(/[0-9]/g))numsum=numsum+Number(item)
        else if(item.match(/[a-zA-Z]/))strlen=strlen+1
    })
    return Math.round(numsum/strlen);
}
const characterremoval=(strarr)=>{
    let dict=strarr[1];
    let word=strarr[0];
    let min=Number.MAX_VALUE;
    let dictarr=dict.split(',')
    dictarr=dictarr.sort((a,b)=>b.length-a.length) 
    for(let i=0;i<dictarr.length;i++){
        let newWord=word;
        let curr=dictarr[i];
        let currarr=dictarr.split('')
        for(let j=0;j<currarr.length;j++){
            if(newWord.indexOf(currarr[j])!=-1){
                let index=newWord.indexOf(currarr[j]);
                newWord=newWord.slice(0,index)+newWord.slice(index+1,newWord.length)
            }
        }
        if(min>newWord){
            min=newWord.length
        }
    }   
    return min;
}
const splitintotwo=(strarr)=>{
    const word=strarr[0];
    const wordarr=strarr[1].split(',');
    const newarr=[]
    for(let i=0;i<wordarr.length;i++){
        for(let j=0;j<wordarr.length;j++){
            if(wordarr[i]+wordarr[j]===word){
                newarr.push(wordarr[i]);
                newarr.push(wordarr[j]);
            }
        }
    }
    return newarr.toString();
}

function addele(strar){
    const [first,second]=strar;
    const arr1=eval(first);
    const arr2=eval(second)
    let add
    if(arr1.length>arr2.length){
        add=arr1.map((val,index)=>{
            return arr2[index]?arr2[index]+val:val;
        })
    }else{
        add=arr2.map((index,val)=>{
            return arr1[index]?arr1[index]+val:val
        })
    }
    return add.join('-')
}
console.log(addele(['[5, 2, 3]', '[2, 2, 3, 10, 6]']));