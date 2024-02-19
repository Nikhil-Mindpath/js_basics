
const p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Promise Resolved Value !! ");
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Promise Resolved Value  2!! ");
    },5000)
})


//async can only be used inside async  function

async function handlePromise(){
    //js wait here to promise for resolved 
    const val =  await p;
    console.log("HELLO ");
    console.log(val);

    const val2  =  await p2 ;
    console.log("val2 ",val2);
}

handlePromise();

function getData(){
    //JS Engine will not wait for it resolve the promise  
    p.then((res)=> console.log(res))
    console.log("Namaste Javascript ");
}

// getData()

// async function getData(){
//     return p;
// }

// const data  = getData();
// console.log(data);

// data.then(
//     (res)=>console.log(res)
// )


// async function handlePromise(){

// }