// 5. Write a function to find the factorial of a number.
const factorial=(num)=>{
    let ans=1
for (let i = 2; i <= num; i++) {
  ans*=i;
}
return ans; 
}
console.log(factorial(5))