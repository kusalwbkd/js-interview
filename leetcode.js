//leetcode 1(1)

//first method o(n^2)
/* var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
       for(let j=i+1;j<nums.length;j++){
          if(nums[i]+nums[j]===target){
        return[i,j]
          }
       }
    }
   }; */

   //second method o(n)
   /* const twoSum=function(nums, target){

    const map=new Map()
    for (let i = 0; i < nums.length; i++) {
    const complaint=target-nums[i]
    if(map.has(complaint)){
        return [map.get(complaint), i];
    }
    map.set(nums[i],i)
    }
    return null;
    

   }

  console.log( twoSum([2,7,11,15],9)); */

  //using objects
/* 
  var twoSum=function(nums, target){

    const obj={}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(obj.hasOwnProperty(complement)){
             return [obj[complement],i]
        }
        obj[nums[i]] = i; 
    }
    return null
  }
  
  console.log( twoSum([2,7,11,15],9)); 
 */

  //using arrays
/* 
  var twoSum=function(nums,target){
    const arr=[]
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(arr.includes(complement)){
             return [arr.indexOf(complement),i]
        }
       arr[i]=nums[i]
    }
    return null
  }
  console.log( twoSum([2,7,11,15],9)) */

  //------------------------------------------------------------------------------------------------------------------------------------------->

  //leetcode 121(2)

  //brute force
/*   function maxProfit(prices){
    let globalProfit = 0;
 for(let i=0;i<prices.length-1;i++){
    for(let j=i+1;j<prices.length;j++){
    let currentProfit=prices[j]-prices[i]
    if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
 }

 return globalProfit


}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); */

//greedy

/* function maxProfit(prices) {
    if (prices.length === 0) return 0; // Return 0 if there are no prices

    let minStockPurchasePrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) { // Start from the second element
        if (prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minStockPurchasePrice);
        }
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
 */

  //------------------------------------------------------------------------------------------------------------------------------------------->

  //leetcode 217(3)

/*   var containsDuplicate = function(nums) {
    const arr=[]

    for(let i=0;i<nums.length;i++){
    
     if(arr.includes(nums[i])){
      return true
     }
      arr.push(nums[i])
    }
    return false
};

console.log(containsDuplicate([1,2,3,4])); */


//optimal solution

/* var containsDuplicate=(nums)=>{

    const uniqueNums=new Set(nums)
   return uniqueNums.size !==nums.length
}
console.log(containsDuplicate([1,2,3,1])); */

//another way

/* var containsDuplicate = function(nums) {
    const seen = new Set(); // Use a Set to track seen numbers

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) { // Check if the number is already in the Set
            return true; // Found a duplicate
        }
        seen.add(nums[i]); // Add the number to the Set
    }
    return false; // No duplicates found
};

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
 */

  //------------------------------------------------------------------------------------------------------------------------------------------->


  //leetcode 238(4)
  //nums=[1,2,3,4]

/*   var productExceptSelf =(nums)=>{
    const n = nums.length;
    const answer = new Array(n).fill(1);
    

    //The prefix product for an index i is the product of all elements in nums to the left of index i

    for(let i=1;i<n;i++){
     answer[i]=answer[i-1]*nums[i-1] // ans[0]=1*1=1,ans[1]=1*1=1,ans[2]=1*2=2,ans[3]=2*3=6                  

    }

    //The suffix product for an index i is the product of all elements in nums to the right of index i.
    let suffix = 1; 
    for(let i=n-1;i>=0;i--){
     answer[i] *=suffix //answer[3]=6, suffix=4
     suffix *=nums[i]
    }
    return answer
  }

  console.log(productExceptSelf([1, 2, 3, 4])); */
  //------------------------------------------------------------------------------------------------------------------------------------------->
//leetcode 53(5)
/* 
function maxSubArray(nums) {
    let sum = 0;
    let max = nums[0];
    let start = 0;
    let tempStart = 0;
    let end = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
  
      if (sum > max) {
        max = sum;
       
      }
  
      if (sum < 0) {
        sum = 0;
       
      }
    }
  
    return max
  } */

    //------------------------------------------------------------------------------------------------------------------------------------------>
    //leetcode 242(6)

    //brute force

/*     var isAnagram = function(s, t) {
        s=s.split("").sort().join("")
        t=t.split("").sort().join("")
        
        return s===t
        
    }; */

    //using objects

   /*  var isAnagram=(s,t)=>{

        if (s.length !== t.length) {
            return false;
        }
    
        const count = {};
        for(let i=0;i<s.length;i++){
            count[s[i]]=(count[s[i]]||0)+1
        }
        for (let i = 0; i < t.length; i++) {
            if (!count[t[i]]) {
                return false; // Character in `t` not in `s` or extra occurrence
            }
            count[t[i]]--;
        }
        return true;
    }

    console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false */

//-----------------------------------------------------------------------------------------------------------------------------------------?

//sliding window maximum

// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is
// moving from the very left of the array to the very right.You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For each window,
// take the maximum element and add them to a final result array.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

//brute force

/* const maxSlidingwindow=(nums,k)=>{

    const result = [];
    const n = nums.length;
    for (let i = 0; i <= n - k; i++) {
        // O(n)
        let max = nums[i];
        for(let j=1;j<k;j++){
         if(nums[i+j]>max){
             max=nums[i+j]
         }
        }

        result.push(max)
    }
    return result
}

console.log(maxSlidingwindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); */

/* const maxSumFixedWindow = (arr, k) => {
    if (arr.length < k) return []; // If there aren't enough elements, return an empty array

    let maxSum = 0;
    let windowSum = 0;
    let startIndex = 0; // Track the starting index of the maximum sum subarray

    // Initialize by calculating the sum of the first `k` elements
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Slide the window
        if (windowSum > maxSum) {
            maxSum = windowSum;
            startIndex = i - k + 1; // Update the start index of the maximum sum subarray
        }
    }

    // Return the subarray from startIndex to startIndex + k
    return arr.slice(startIndex, startIndex + k);
};

console.log(maxSumFixedWindow([2, 1, 5, 1, 3, 2], 3)); // Output: [5, 1, 3] */


//--------------------------------------------------------------------------------------------------------------------------------------->

//sliding window for a fixed size

/* const maxSumFixedWindow = (arr, k) => {
    if (arr.length < k) return 0; // If there are not enough elements

    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first `k` elements
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window over the rest of the array
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Slide the window by adjusting the sum
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSumFixedWindow([2, 1, 5, 1, 3, 2], 3)); */ // Output: 9 (subarray [5, 1, 3])
//--------------------------------------------------------------------------------------------------------------------------------------->

//leetcode 3(7)

/* 
var lengthOfLongestSubstring =(s)=>{
    let maxLength = 0;
    let left = 0;
    const charSet = new Set();

    for(let right=0;right<s.length;right++){
         
 // If the character at `right` is already in the Set, remove characters
        // from the left until we remove the duplicate
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength
}

 */


//------------------------------------------------------------------------------------------------------------------------------------->
//leetcode-20(8)

/* const isValid=(s)=>{
    const stack=[]
    for(let i=0;i<s.length;i++){
        const char=s[i];

        if(char === "(" || char === "[" || char === "{"){
          stack.push(char)
        }else if(char === ")" || char === "]" || char === "}"){
            if (isEmpty(stack)) {
                return false;
              }
              const top = stack.pop();
              if (
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
              ) {
                return false;
              }
        }
    }


    function isEmpty(stack) {
        return stack.length === 0;
      }
      return isEmpty(stack);

}



const string1 = "([]{})";
console.log(isValid(string1)); */

//second method

/* const isValid=(s)=>{
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
   
    for(let char of s){

        if(map[char]){
            stack.push(map[char]);
            
        }  else {
            if (stack.pop() !== char) {
                return false;
            }
        }

    }
    return stack.length === 0;

}
const string1 = "([]{})";
console.log(isValid(string1)); */

//------------------------------------------------------------------------------------------------------------------------------------

//leetcode 5

var longestPalindrome = function(s) {
    if (s.length < 2) return s;  // Edge case: if string length is 1 or empty
    
    let start = 0;
    let maxLength = 1;

    let

}