// console.log("hi");
//  function areaoftri(length,height){
//  return 1/2(length*height);
//  }
//  function circlear(radii){
//     return 3.14*radii^2;

//  }
//  function areaofrect(lengt,bredth){
//     return lengt*bredth;
//  }
//  module.exports={
//     areaoftri:function areaoftri(length,height){
//           return 1/2*(length*height);
//           },
//     circlear:function circlear(radii){
//              return 3.14*(radii**2);
//           },
//     areaofrect:function areaofrect(lengt,bredth){
//              return lengt*bredth;
//           }
//   }  // //normal method and the next is with arrow function
//   module.exports={
//     areaoftri: (length,height)=>{
//           return 1/2*(length*height);
//           },
//     circlear:(radii)=>{
//              return 3.14*(radii**2);
//           },
//     areaofrect:(lengt,bredth)=>{
//              return lengt*bredth;
//           }
//   }
  //
  //singly demo:-
//   exports.areaoftri=(length,height)=>{
//           return 1/2*(length*height);
//           }doing export one by one without module
exports.areaoftri=(length,height)=>{
    return 1/2*(length*height);
    }
exports.circlear=(radii)=>{
    return 3.14*(radii**2);
    }
exports.areaofrect=(lengt,bredth)=>{
    return lengt*bredth;
    }