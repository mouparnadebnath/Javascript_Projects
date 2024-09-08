// 4. Create a function to find the longest common prefix in an array of strings.
const prefix=(str)=>{
if(str.length==0)
    return "Please Enter Strings"
let prefix=str[0]
for (let i = 1; i < str.length; i++) {
while (str[i].indexOf(prefix)!==0) {
    prefix=prefix.substring(0,prefix.length-1)
    if (prefix.length==0) 
       return "No prefix found";
}   
}
return prefix
}
const str=["preliminary","previous"]
console.log(prefix(str))