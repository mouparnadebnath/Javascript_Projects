// 3. Write a function to check if an object has a specific property.
const obj=(objc,property)=>{
const arr =Object.keys(objc)
const specific=arr.includes(property)
return specific
}
const objc={om:"mou",age:"20"}
const property="om"
console.log(obj(objc,property))