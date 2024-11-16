//multiply each elemet of an array using for

/* function multiply(arr){
let product=1
for(let i=0;i<arr.length;i++){
   product *=arr[i]
}

return product
}

console.log(multiply([1,2,3,4,5])); */

//using recurssion

/* function multiply(arr){
    if(arr.length <=0){
     return 1

    }else{
        return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1))//
    }
}
console.log(multiply([1,2,3,4,5])); 
 */

//-----------------------------------------------------------------------------------------------------------------------------------------?

// Ques 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

/* const factorial=(n)=>{
    if(n===0){
        return 1
    } else{
        return n*factorial(n-1)

    }

}

console.log(factorial(5)); */
//----------------------------------------------------------------------------------------------------------------------------------------?

// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:

/*  function rangeOfNumbers(startNum,endNum){

    if (endNum < startNum) {
        return [];
      }
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      
       numbers.push(endNum)
      
      
      return numbers;
}
console.log(rangeOfNumbers(1, 5)); */

//-----------------------------------------------------------------------------------------------------------------------------------------------------?
/* 
const fib=function(n){

    if(n<=1){
    return n
    }

    return fib(n-2)+fib(n-1)

}

console.log(fib(4)); */
//-----------------------------------------------------------------------------------------------------------------------------------------------------?
// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"
/* function reverseString(str) {
    if (str === "") {
      return "";
    } else return reverseString(str.substr(1)) + str.charAt(0);
  }
  

console.log(reverseString("hello"));  */

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

/* const subsets=(nums)=>{
    let result = [];
    let temp = [];

    function recursiveSubsets(nums, i){
        if (i === nums.length) {
            return result.push([...temp]);
          }
          temp.push(nums[i]);
          recursiveSubsets(nums, i + 1);
          temp.pop();
          recursiveSubsets(nums, i + 1);

    }

    recursiveSubsets(nums, 0);
    return result;

}

console.log(subsets([1,2,3])); */




