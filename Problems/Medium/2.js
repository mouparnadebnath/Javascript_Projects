// 2. Create a function to find the sum of an array of numbers.
const sumofarr=(arr)=>{
const sum=arr.reduce((accumulator,currentValue)=>{return accumulator+currentValue})
return sum
}
const num=[84295,3,4,736748,87498457,9827834798,985986,873498532,98598695,3875938759,92222222]
console.log(sumofarr(num))