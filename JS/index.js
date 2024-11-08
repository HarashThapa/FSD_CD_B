// let a=12;
// if(a>10){
//     a=30;
//     let b=10
//     console.log(a);
//     console.log(b);
    
// }
// console.log(a);


//arrow function

// function hello(){
//     console.log("hello user");
    
// }
// hello();
// const hello1=()=>{
//     console.log("hellooooooo");
    
// }
// hello1();
// function sum(x,y,z){
//     return (x+y+z);
// }

// const sum1=(x,y,z)=>{
//     return (x+y+z);
// }

// const result= sum(5,6,4);
// console.log(result);
// console.log(sum1(2,3,5));




// Object  Spreading 
const Person={
    name: "thapa",
    age: 20
}

// cloning
const newPerson={...Person};
const newPerson1={...Person,city:"samba"};
const newPerson2={...Person,name:"harash"};
newPerson.age=35;
console.log(Person);
console.log(newPerson);
console.log(newPerson1);
console.log(newPerson2);

//array
const emp=["def",5,12514.5];
console.log(emp);
const emp1=[...emp];
console.log(emp1);

const emp2=[...emp,"kan"];
console.log(emp2);










