//
const fs=require('fs');
//let datanow='hello friends how are you';
let datan='THIS IS ORIGINAL TEXT';
//WRITE
 fs.writeFile('./logx.txt',datan,(error)=>{
    if(error){
        console.log(error,'err')
    }else{
        console.log("file just got created SUCCESSFULLY>>");
    }
})
//READ
fs.readFile('./logx.txt',"utf-8",(error,datan)=>{
    if(error){
        console.log(error)

    }else{
        console.log(datan,'datan >read success..')
    }
})
//APPEND
let dataapp=" JUST APPENDED NOW";
fs.appendFile('./logx.txt',dataapp,(error)=>{
        console.log('file appended with success>>')
        if(error){
            console.log(error)
        }
    })
