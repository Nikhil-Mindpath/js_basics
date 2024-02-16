
// VARUIABLES 
 

// var let and const 
// var is function scope 
// function test(){
//     var element  =  20;
// }
// {
//     var  element=  10;
// }

// console.log(element);

// value changed in let remain changed instead of scoping 

// function test2(){
//     let ele1 =  "Hello";
//     var ele2 =  "Hello"
//    if(true){
//     let ele1  = "Hii"
//     var ele2= "Hii" // var once changed  remain changed 

//     console.log("let inside " , ele1);
//    }
//     console.log(ele1);
//     console.log(ele2);
    
// };
// test2();

// REDECLARATIONS   

// In Let cannot redeclare with same scope and with same name  

// let a  = 10 ;
// let a  =20;
// console.log(a ); // not possible 



// var a  =90; var a  = 20
// console.log(a);


//   ARRAYS  -----------------------

let arr  =  [1,2,3];

// for(let index  =0 ;index<arr.length;index++){
//     console.log(arr[index]+1);
// }

    // FOR OF   used for arrays and strings 

// for(let val of arr){
//     console.log(val);
// }

// let str =  "Nikhil Pathade"
// for(let   val of str){
//     console.log(val);
// }

//    FOR IN  used to traverse through objects 


// let student ={
//     name : "Nikhil",
//     age : 19,
//     marks : arr
// }
// for(let key in student){
//     console.log(student[key]);
// }
//      // MAP
let newArr =  arr.map((num)=> num *3);
// console.log(newArr);

   // Filter 

let newArr2 = newArr.filter((num) => num>10);
// console.log(newArr2);  

   // Reduce 


// let newArr3 =  arr.reduce(((prev,curr)=> prev + curr),0)
// console.log(newArr3);


  // ForEach 
  arr.forEach((val)=>{ if(val>1)console.log(val)}) // even we can pass function also like arr.forEach(myfunc)

// used to return an array by callback func  does not return new arr 

      // find method 

// let value  = newArr.find((val)=> val>3) // return the first value if base condition become true 
//  console.log(value);

  //findIndex 
//   console.log(newArr);
//   let valueIndex =  newArr.findIndex((val)=> val>6) 
//   console.log(valueIndex);

