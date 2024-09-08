// 9. Write a function to find the minimum value in an array.
const minval=(arr)=>{
const iterator=arr.values()
for (const value of iterator) {
    return Math.min(value)
}
}

const arr=["35","5096","3252","2544","1314","45","56","45"]
console.log(minval(arr))