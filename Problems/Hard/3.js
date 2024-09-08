// 3. Write a function to implement the binary search algorithm.
const binarysearch=(arr,target)=>{
let left=0;
let right=arr.length-1;
while (left<=right) {
    const mid=Math.floor((left+right)/2)
    if (arr[mid]===target) {
       return mid
    }
    else if(arr[mid]<target){
        left=mid+1;
    }
    else{
        right=mid-1;
    }
}
return -1;
}
const arr=[32,44,72,456,234]
const target=234;
console.log(binarysearch(arr,target))