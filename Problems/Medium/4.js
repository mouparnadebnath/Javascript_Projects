// 4. Create a function to count the number of vowels in a string.

const countVowels=(str)=>{
    const vowels="AEIOUaeiou"
const arr=str.split("")
const vowelsinstr=arr.reduce((count,char)=>vowels.includes(char)?count+1:count,0)
return vowelsinstr
}
const str="namaste bharat"
console.log(countVowels(str))