const fs=require('fs');
fs.readFile('./log.txt',"utf-8",(error,data)=>{
    if(error){
        console.log(error)

    }else{
        console.log(data,'datat..')
    }
})
//ASYNC AWAIT
//-----------------------------------------
// const fs=require('fs/promises');
// async function fil2(){
//     try{
        
//     let data1=await fs.readFile('./log1.txt',"utf-8");
//     if(data1){
//         console.log(data1);
//     }
// }catch(error){
// console.log(error)
// }
// }
// fil2();