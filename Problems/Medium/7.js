// 7. Write a function to find the maximum value in an object.
const object=(obj)=>{
const maxval=Math.max(...Object.values(obj))
return maxval
}

console.log(object({a:34,f:45}))