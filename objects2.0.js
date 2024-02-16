
// normal obj   

let person = {
    name: "Nikhil",
    age :  22 , 
    bio : function() {
        console.log(`${this.name[0]} ${this.age}`);
    }

}
//another simple way 
let person2 = {
    name: "Mohit",
    age :  18, 
    bio() {
        console.log(`${this.name} ${this.age}`);
    },
};

// person2.bio();
// console.log(person["name"]);

person2.age = 80;  //can change value directly 
// console.log(person2.age);

// insead of creating obj each time through constructor we can also do by func

function createUser(name){
    const obj = {}
    obj.name = name
    obj.introduce =  function(){
        console.log("Hello There my name is ",this.name);
    };
   return obj ;
}

const userNik =  createUser("NIkhil");

const userGuru = createUser("Guru");

// console.log(userNik.name);
// userGuru.introduce()

//  ------------------- better way is to use a func name as  constructor ------------------

// do this by this.prop and create obj by new keyword

// function createPerson(name){
//     this.name = name;
//     this.introduce = function(){
//         console.log(`Hello my self  ${this.name}`);
//     }
// }
// const p1 =  new createPerson("Roshan");
// const p2 = new createPerson("Muskan");
// // console.log(p1.name);
// // p2.introduce();

