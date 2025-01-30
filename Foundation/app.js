// callback function
// function showcallfn(fn){
//     let val=10;
//   fn(val);
// }
// function fn(val){
//     console.log('Hello from callback',val);
// }
// showcallfn(fn);

// object in function
function objfn(){
   return `Hello from ${person.name}, age ${person.age}`;
}
let person={
    name:'John',
    age:30,
    objfn
}
console.log(person.objfn());


 let person2={
     name:'John',
     age:30,
     greet:function(){
        return `Hello from ${person.name}, age ${person.age}`;
     }
 }
 console.log(person2.greet());