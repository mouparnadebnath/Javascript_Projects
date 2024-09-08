// 1. Write a function to implement the bubble sort algorithm.
const bubblesort=(arr)=>{
let swapped;
do {
    swapped=false;
    for (let i = 0; i < arr.length-1; i++) {
       if (arr[i]>arr[i+1]) {
         let temp=arr[i]
         arr[i]=arr[i+1]
         arr[i+1]=temp
         swapped=true
       }

    }
} while (swapped)
    return arr;
}

const arr=[244,387,984,478,3983,8745,32442,546,342,656,324,24326,657,763,537,879,4,6,47,4,84,90]
console.log(bubblesort(arr))