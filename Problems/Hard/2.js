// 2. Create a function to find the first duplicate in an array.
// 1.using set
const finddirstduplicate1=(arr)=>{
    const seen=new Set()
    for (let i = 0; i < arr.length; i++) {
if (seen.has(arr[i])) {
    return arr[i]
}      
seen.add(arr[i])  
    }
    return -1;
}
const arr=[5,65,3,5,5,68,674,2,]
console.log(finddirstduplicate1(arr))

// 2.using loop
const finddirstduplicate2=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
for (let j = i+1; j < arr.length; j++) {
if (arr[i]===arr[j]) {
    return arr[i]
}    
}        
    }
    return -1
}
console.log(finddirstduplicate2(arr))