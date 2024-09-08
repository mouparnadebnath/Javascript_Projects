// // print numbers from 1 to 10 using for loop
// const numbers=()=>{
//     for (let i = 0; i < 11; i++) {
//         console.log(i)
//     }
// }
// numbers()
// // calculate the sum of numbers from 1 to 100 using for loop
// let sum = 0
// for (let i = 1;  i<= 100; i++) {
//  sum+=i

// }
// console.log(sum)
// // print even numbers from 1 to 20 using for loop
// for (let i = 0; i <=20; i+=2) {
// console.log(i)
// }
// // generate the fibonacci sequence up to the 10th number using a for loop
// let a = 0
// let b= 1
// console.log(a)
// console.log(b)
// for (let i = 3; i <=10; i++) {
// let next=a+b
// console.log(next)
// a=b
// b=next
// }
// // print a countdown from 10 to 1 using for loop
// for (let i =10; i >=1; i--) {
//     console.log(i)
// }

// calculate the factorial of a number using a for loop
// function factorial(n) {
//     let result = 1
//     for (let i = 1; i <=n; i++) {
//        result*=i

//     }
//     return result
// }
// console.log(factorial(4))

// iterate through an array and print its elements using a for loop
// let array=[1,2,3,4,5]
// for (let i = 0; i < array.length; i++) {
//    console.log(array[i])

// }
// display the multiplication  table of a number using for loop
// let number=5
// for (let i = 1; i <= 10; i++) {
//    console.log(number + " x " + i + " = " + (number*i))

// }
// reverse a string
// function reversestr(inputstr) {
//     let reversed = "";
//     for (let i = inputstr.length - 1; i >= 0; i--) {
//         reversed += inputstr[i];
//     }
//     return reversed;
// }
// console.log(reversestr("mou is a bad girl"));

// find and print the prime numbers between 1 and 50 using for a loop
// function isPrime(num) {
//     if (num <= 1) return false
//     if (num <= 3) return true
//     if (num % 2 === 0 || num % 3 === 0) return false
// for (let i = 5; i*i <= num; i+=6) {
//   if (num%1===0||num%(i+2)===0) return false
// }
// return true
// }

// for (let i = 2; i <=50; i++) {
//     if (isPrime(i)) {
//         console.log(i)
//     }

// }
// use a for loop to generate a pattern of asterisks
// for (let i = 1; i <=5; i++) {
//     let line =""
//     for (let j = 1; j <= i; j++) {
//       line+="*"

//     }
//     console.log(line)
// }
// // calculate the ppower of a number
// function calculate(base,exponent) {
//     let result = 1
//     for (let i = 1; i <= exponent; i++) {
//      result*=base

//     }
//     return result
// }
// console.log(calculate(2,5))
//       sum the elements of an array using a for loop
// let numbers=[1,4,5,7,3,67,78]
// let sum=0
// for (let i = 0; i < numbers.length; i++) {
//   sum+=numbers[i]

// }
// console.log(sum)
// calculate average of an array of numbers

// function average(number) {

//   let sum=0
//   for (let i = 0; i < number.length; i++) {
//     sum +=number[i];

//   }
//   return sum/number.length
// }
// console.log(average([2,45,34,123,56,78]))

// find and print the largest number in an array using a for loop
// function largestnum(number) {
//   let largest=number[0]
//   for (let i = 1; i <number.length; i++) {
//  if (number[i]>largest) {
//   largest=number[i]
//  }
//   }
//   return largest
// }
// console.log(largestnum([1,3,3,457,464646435,23,5325235352,4356345566,32545453,235234124123,575675675675,246535252,32552525252,634754,3463487,834273532875,8237957289578,81757,87358475,782748928,978787878787887,784758748472,783183,782568274,8247375417582785,]))
// find the smallest
// function smallestnum(num) {
//   let smallest=num[0]
//   for (let i =1; i > num.length; i++) {
//     if (num[i]<smallest) {
//      smallest=num[i]
//     }

//   }
//   return smallest
// }
// console.log(smallestnum([1,2,3]))
// count and print the numbers of vowel in a given string
// function countvowels(inputstring) {
//   let vowels="AEIOUaeiou"
//   let count=0
//   for (let i = 0; i <inputstring.length; i++) {
//     if (vowels.includes(inputstring[i])) {
//       count++ 
//     } 
//   }
//   return count
// }
// console.log(countvowels("mou loves OM"))

// count words in a sentence
// function countwords(sentence) {
//   let count=0
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i]===' ' && i>0 && sentence[i-1]!==' ') {
//       count++
//     }
//   }
//   if (sentence.length>0 && sentence[sentence.length-1]!==' ') {
//     count++
//   }
//   return count
// }
// console.log(countwords("mou loves maa baba."))
// find the largest prime before the given number
// function isPrime(num) {
//   if (num <= 1) return false
//   if (num <= 3) return true
//   if (num % 2 === 0 || num % 3 === 0) return false
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % 1 === 0 || num % (i + 2) === 0) return false
//   }
//   return true
// }
// function find(n) {
//   let largestnum = null
//   for (let i = n - 1; i >= 2; i--) {
//     if (isPrime(i)) {
//       largestnum = i
//       break
//     }

//   }
//   return largestnum
// }
// console.log(find(875687))
// convert a decimal number to a binary
//  function decimaltobinary(decimal) {
//     let binary=""
//     while (decimal>0) {
//         binary=(decimal%2)+binary
//         decimal=Math.floor(decimal/2)
//     }
//     return binary
//  }

//  console.log(decimaltobinary(10))

//  calculate sum of digits of a number using a for loop
// function sumofdigits(number){
//     let sum=0
//     while (number>0) {
//         sum+=number%10
//         number=Math.floor(number/10)
//     }
//     return sum
// }
// console.log(sumofdigits(23445434542))

// find amd print the second largest element in an array using a for loop
// function findsecondlargest(numbers) {
//     let largest=-Infinity
//     let secondlargest=-Infinity
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i]>largest) {
//             secondlargest=largest
//             largest=numbers[i]
//         }
//         else if(numbers[i]>secondlargest && numbers[i]!==largest)  {  
//              secondlargest=numbers[i]}
//     }
//     return secondlargest
// }
// console.log(findsecondlargest([65,46,35,567,78434,2422,46646,13113,6577,244]))

// check if a given year is leapyear or not
// function findleapyear(year) {
   
//         if (year%4===0 && year % 100!==0) {
//            return true
//         }
//    return false;     
//     }
   
// console.log(findleapyear(2006))

// // determine and print GDC (gretest common divisor) of two nums
// function findgdc(a,b) {
//     while (b!==0) {
//         let temp=b
//         b=a % b
//         a=temp
        
//     }
//     return a
// }
// console.log(findgdc(77,11))
// print a hollow square
// function hollow(n) {
//     for (let i = 0; i <= n; i++) {
//         let line=""
//         for (let j = 0; j <=n; j++) {
//             if (i===1||i===n||j===1||j===n) {
//                 line+="*"
//             } else {
//                 line+=" "
//             }
            
//         }
//         console.log(line)
//     }
    
// }
// hollow(100)

// find the smallest num that is divisible by all numbers from 1 to 20
// function findsmallestmultiple(){
//     let number=20
//     while (true) {
//         let divisible=true
//         for (let i = 2; i <=20; i++) {
//            if (number%i!==0) {
//             divisible=false
//             break
//            }
//         }
//         if (divisible) {
//             return number
//         }
//         number+=20
//     }
// }
// console.log(findsmallestmultiple())
// calculate and print factorial of a number using a loop
// function factorial(n) {
//     let result=1
//     for (let i = 1; i <=n; i++) {
//         result*=i
        
//     }
//     return result
// }
// console.log(factorial(7))
// check if a number is a perfect number
// function isperfectnumber(number) {
//     let sum=0
//     for (let i = 1; i <=number/2; i++) {
//        if (number%i===0) {
//        sum+=i
//        }
        
//     }
//     return sum===number
// }console.log(isperfectnumber(28))

// check if a number is a strong number
function isstrongnumber(number) {
    let num=number
    let sumoffactorials=0
    while (num>0) {
        let digit=num%10
        let factorial=1
        for (let i = 1; i <=digit; i++) {
           factorial*=i
        }
        sumoffactorials+=factorial
        num=Math.floor(num/10)  
    }
    return sumoffactorials===number
}
console.log(isstrongnumber(145))

