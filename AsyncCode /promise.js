
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("som error occured");
// });




// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("data",dataID);
//         resolve("Sucess");
//         if(getNextData){
//             getNextData();
//         }
//      },2000)
//     })
// }

// let 

// getData(123);

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);//orderId

promise
    .then(function (orderId) {
        console.log(orderId);
        console.log("I GT IT ");
        return orderId;
    })
    .then(function (orderId) {
      return  proceedToPay(orderId);
    })
    .then(function(paymentInfo){
      console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })

  console.log("HERE it get executed ");
function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
    })
    return promise;
}
function validateCart(cart) {
    return true;
}
function proceedToPay(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successfull");
    });
}
