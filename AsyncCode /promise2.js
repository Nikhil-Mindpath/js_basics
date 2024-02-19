
// function add(a,b){
//     const promise =  new Promise(function(resolve,reject){
//         if(a != null&& b !=null){
//          const ans  =  a+b;
//          resolve(ans);
//         }
//         else{
//             const err =new Error("invalid numbers ")
//             reject(err);
//         }
//     })
//     return promise;
// }

// add(2,4)
// .then(function(ans){
//    console.log(ans);
// }).catch(function(err){

// console.log(err.message);
// })


const promise =  new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
     resolve("PR raised ")
    },10000);
});


function add(){
promise.then((res)=>{
console.log(res)})
console.log("HII");

}

add();
