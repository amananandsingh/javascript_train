//file appended success
 const fs=require('fs');
// let data="hello indian";
// fs.appendFile('./log1.txt',data,(error)=>{
//     console.log('file appended successfully')
//     if(error){
//         console.log(error)
//     }
// })
fs.rmdir("audio",(error)=>{  //mkdir-to create dir,rmdir-to delete
    if(error){
        console.log(error);

    }else{
       // console.log("directory audio created")
       console.log("directory audio deleted")

    }

 })
fs.rmdir("video",(error)=>{  //mkdir-to create dir,rmdir-to delete
    if(error){
        console.log(error);

    }else{
        console.log("directory created")
    }

 })
//to delete a file in a folder