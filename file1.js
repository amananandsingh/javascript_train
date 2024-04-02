// const fs=require('fs');   //predefined file or module
// //console.log(fs,'fs')
// let data='hello friends how are you';
// fs.writeFile('./log.txt',data,(error)=>{
//     if(error){
//         console.log(error,'err')
//     }else{
//         console.log("file created successfully");
//     }
// })
//async and await function with fs/promises;fs-returns callback,fs/promises-returns promise
//-----------------------------------------------------
const fs=require('fs/promises');
//let data1='hello friends go you';
async function fil1(){
    try{
    let content='hello hi ji aap ji kese ho';
    let data1=await fs.writeFile('./log2.xls',content);   //ext-xls,pdf,doc...
    if(content){
        console.log("written success");
    }
}
catch(error){
    console.log(error,'error....')
}
}
fil1();

