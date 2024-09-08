// 6. Create a function to check if a number is prime.

const isprime=(n)=>{
if (n%2!==0 && n%3!==0) {
    return true
}
return false
}
console.log(isprime(6874378434))