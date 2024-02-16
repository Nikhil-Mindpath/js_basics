

// Synchronous Programming print line wise from top to down 

//    Asynch work by not waiting for the process to it execute the waited process parallrly and execute forward code which was available
//   It allow to execute next instruction immediately does not block the flow 

// console.log("Hwllo 1");
// setTimeout(()=>{
//     console.log("Hello");
// },0);

// console.log("Hello 2"); It get called first 

// callback is an function passed as an argument into another funct  OR
// also can pass complete function inside it by arrow func 

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,SumCallback){
//     SumCallback(a,b)
// }
// // calculator(2,3 ,sum);

// let value = 1;

//   doSomething(() => {
//   value = 2;
// });

// console.log(value);
//    Async code 

   console.log("start");

function importantAction(username,cb){
 setTimeout(()=>{
     cb(`subscribe to ${username}`);
 },1000);
} 

function funct2(video,cb){
  setTimeout(()=>{
    cb(`Like the video ${video}`);
  },500);
}

importantAction("Roadside Coder ", function(message){
    console.log(message);   
});

funct2("It is second funct",(action)=>{
    console.log(action);
});


// console.log(message);
console.log("Stop");



// function fetchData(nikhil) {

//     setTimeout(function () {
//         const data = [1, 2, 3, 4, 5];
//         nikhil(data);
//         console.log(data)
//     }, 1000);
// }

function fetchData2(nikhil) {

    setTimeout(function () {
        const data = [6,7,8,9,10];
        nikhil(data);
        console.log(data)
    }, 2000);
}

function fetchData3(nikhil) {

    setTimeout(function () {
        const data = [11, 12, 13, 14, 15];
        nikhil(data);
        console.log(data)
    }, 3000);
}
//this is an callback function  which we will pass 
function processData1(data) {
    console.log("Data Recieved", data);
}

function processData2(data) {
    console.log("I am processData2 Method", data);
}

fetchData(processData1);
fetchData3(processData1);
fetchData2(processData1);


function onClick(callback){
    console.log("user clicked ");
    setTimeout(()=>{   
    callback();
    },3000);
}

function handleClick(){
    console.log("Handling clicked event ");
}

onClick(handleClick);