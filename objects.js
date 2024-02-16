

// Objects made through Constructors are known as 
//        singleton object 
//   Object.create this is through constructor creation of obj also known singelton obj 

// these are the examples of object literals 

const user = {
    name  :  "Nikhil",
    age : 92,
    year : 2002,

}
// console.log(user.name ); // to access obj
// console.log(user["age"]);  

// to use Symbol as unique  in obj

const jsUser =  Symbol("Key");

const student = {

    schoolName : "Christina",
    place : "Indore ",
    [jsUser] : "myKey2"
 }
//  console.log(student);
 // override obj  

 user.age = 20;
//  console.log(user.age);

//   to lock obj values  so that  it can not be changed in future 
Object.freeze(user);
user.name = "Rohan"
// console.log(user);// no changes occur  



//  ---------------OBJECTS INSIDE OBJECTS -----------------

const regularUser = {
    email: "hello@mindpath",
    fullname : {
        userfullname: {
            firstname : "Nikhil",
            lastname : "Pathade ",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
  

            //  to combine obj 

const obj1 = {
    first: 'a',
    2 : 'b',
    3: 'c',
}
const obj2 = { 4 : 'd', 5 : 'e',6 :'f'}
//  (target,source )
// const obj3 =  Object.assign({},obj1,obj2);
// console.log(obj3);


//   Most often used obj combine way 
const obj3  =  {...obj1,...obj2}
// console.log(obj3);

// to print obj  again and again do this insteadd of obj.val
const {first : objkey}  = obj1
console.log(objkey);

