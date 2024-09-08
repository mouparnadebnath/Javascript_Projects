// <!-- 10. Create a function to reverse a string. 

const reversestring=(string)=>{
let arr=string.split("")
let reversedarr=arr.reverse()
let newstr=reversedarr.join("")
console.log(newstr)
}
reversestring("hello namaste")