   // CALL BACK EXCERCISE

// function getData(orderid,cb){
//     orderid =  20;
//     console.log("ORder id is ",orderid);
//     setTimeout((orderid)=>{ 
//       cb(orderid);
//     },2000)
// }

// function callBack(id){
//     console.log("Hii i am an callback function ");
// }

// getData(128,callBack);]

//============================= callback to promise conversion =============================================


// function convertion(cb){
//     const promise  =  new Promise((resolve,reject)=>{
//         resolve(cb);
//     })
//     return promise;
// }
// function callback(){
//     console.log("HII i am an callback through promises ");
// }
// convertion(callback)
// .then((cb)=>cb());


// function cb( arg1,arg2,callback){
       
//     setTimeout(()=>{
//      const result = arg1 +arg2;
//       if(result %2 !== 0){
//        callback(null,result);
//       }else{
//         callback(new Error('Result is not odd  '),null);
//       }
//     },1000);

// }

// function promisiedFunction(arg1,arg2){
//     return new Promise((resolve,reject)=>{
//         cb(arg1,arg2,(error,result) => {
//             if(error){
//                 reject(error);
//             }else{
//                 resolve(result);
//             }
//         });
//     });
// }


// promisiedFunction(2,3)
// .then((res)=> console.log("resut ",res))
// .catch((err)=> console.log("Error",err.message));


// promisiedFunction(2,4)
// .then((res)=> console.log("resut ",res))
// .catch((err)=> console.log("Error",err));


      // A  async operation in sequence way 


      function  asyncOp1(){
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                console.log("Async op 1");
                resolve();
             },2000)
        })
      }

      function  asyncOp2(){
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                console.log("Async op 2");
                resolve();
             },2000)
        })
      }

      function  asyncOp3(){
        return new Promise((resolve,reject)=>{
             setTimeout(()=>{
                console.log("Async op 3 ");
                resolve();
             },1000)
        })
      }

      async function  perfomOperation(){
    //     await asyncOp1();
    //     await asyncOp2();
    //     await asyncOp3();
    //     console.log("All op completed ");
      }
      
    //   asyncOp1()
    //   .then((()=> asyncOp2()))
    //   .then((()=> asyncOp3()))

