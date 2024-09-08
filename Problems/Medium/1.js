// 1. Write a function to check if a string contains a specific substring.
const substring=(str,substr)=>{
     return str.includes(substr)
}
const str="WOW! This is a duck";
const substr="WOW!"
console.log(substring(str,substr))