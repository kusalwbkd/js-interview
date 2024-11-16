//second largest distinct number of an array
//brute force approach

/* const secondLargest=(arr)=>{
 const uniqueArr=Array.from(new Set(arr)) 
 uniqueArr.sort((a,b)=>{
    return b-a
 })

 if(uniqueArr.length >=2){
return uniqueArr[1]
 }else{
    return
 }
}


//console.log(secondLargest([12,35,1,10,34,1]));
console.log(secondLargest([5,10,10])); */

//optimized solution

/* const secondLargestOptimized=(arr)=>{
let largest=Number.NEGATIVE_INFINITY
let secondLargest=Number.NEGATIVE_INFINITY

for(let i=0;i<arr.length;i++){
  if(arr[i]>largest){
    secondLargest=largest
   largest=arr[i]
   
  }else if(arr[i]!==largest && arr[i]>secondLargest){
secondLargest=arr[i]
  }
 
}
return secondLargest
}
console.log(secondLargestOptimized([12,35,1,10,34,1]));
console.log(secondLargestOptimized([5,10,10])) */

//------------------------------------------------------------------------------------------------------------------------------------------

// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

/* function rotateArray(nums,k){

  let size=nums.length
  if(k>size){
   k=k % size
  }
  const rotated=nums.splice(size-k,size)
  nums.unshift(...rotated)
  return nums
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); */

//optimised solution

/* function rotateArray(nums,k){
  let size=nums.length
  if(k>size){
   k=k % size
  }
  //[1, 2, 3, 4, 5, 6, 7]=>reverse the array[7,6,5,4,3,2,1]=>[5,6,7,4,3,2,1]=>[5,6,7,1,2,3,4]

 /*  a++ (Post-increment): This increments the value of a by 1 after returning the original value of a. 
  So, if a is 5, let result = a++ will set result to 5 and then increment a to 6. */

/* 
  ++a (Pre-increment): This increments the value of a by 1 before returning the new value of a. 
  So, if a is 5, let result = ++a will set result to 6 and a will also be 6. */

 /* function reverse(left,right){
while(left<right){
let temp=nums[left] 
nums[left++]=nums[right]
nums[right--] = temp;
}
 } */
//first call

/* First Iteration:

    left = 0, right = 4
    temp = nums[left] = nums[0] = 1
    nums[left++] = nums[right] ⇒ nums[0] = nums[4], so nums becomes [5, 2, 3, 4, 5]
    nums[right--] = temp ⇒ nums[4] = 1, so nums becomes [5, 2, 3, 4, 1]
    Now, left increments to 1, and right decrements to 3. */


   // Reverse the entire array
  // reverse(0, nums.length - 1);
   // Reverse the first k elements
 //  reverse(0, k - 1);
   // Reverse the remaining elements
  // reverse(k, nums.length - 1);

   //return nums
//}

//console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
 //*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------->

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

/* function removeDuplicates(nums) {
  if (nums.length === 0) return 0; // Handle edge case for empty array

  let uniqueIndex = 1; // Pointer for the next unique element

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) { // Compare with the previous element
          nums[uniqueIndex] = nums[i]; // Place the unique element
          uniqueIndex++; // Move the unique index forward
      }
  }

  // Return the length of the unique elements
  return uniqueIndex;
}

// Example usage:
const nums = [0,0,1,1,2,2,3,3,4];
const length = removeDuplicates(nums);
console.log(length); // Output: 5
console.log(nums.slice(0, length)); // Output: [0, 1, 2, 3, 4] */


//=---------------------------------------------------------------------------------------------------------------

//Identifies the unique element in an array where every other element appears twice.
//leetcode 136

//1st method

/* var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j && nums[i] === nums[j]) {
              isDuplicate = true;
              break;
          }
      }
      if (!isDuplicate) {
          return nums[i];
      }
  }
};

console.log(singleNumber([1,2,1,1,3,2,2])); */


//---------------------------------------------------------------------------------------------------------------------->
//leetcode 88

/* var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;  // Last element of nums1's initial values
  let p2 = n - 1;  // Last element of nums2
  let p = m + n - 1;  // Last position in nums1

   while(p1>=0 && p2>=0){
     if(nums1[p1]>nums2[p2]){
        nums1[p]=nums1[p1]
        p1--
     }else{
      nums1[p]=nums2[p2]
      p2--
     }
     p--
   }
   while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
  }

  return nums1
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(merge(nums1, m, nums2, n));
 */

//------------------------------------------------------------------------------------------------

//leedtcode 268

/* function missingNumber(nums) {
  const n = nums.length;
  const numArray = new Array(n + 1).fill(false); // Create an array filled with false

  // Mark the indices of the numbers present in the nums array
  for (let num of nums) {
      numArray[num] = true;
  }

  // Find the index that is still false
  for (let i = 0; i <= n; i++) {
      if (!numArray[i]) {
          return i; // The missing number
      }
  }
}

// Example usage:
const nums = [0, 2];
console.log(missingNumber(nums)); */ // Output: 2

//alternative approach

/* function missingNumber(nums) {
  const n = nums.length; // The length of the array is n
  const expectedSum = (n * (n + 1)) / 2; // Sum from 0 to n
  const actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of the numbers in the array
  return expectedSum - actualSum; // The missing number
}

// Example usage:
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2 */

//-------------------------------------------------------------------------------------------------------------------------------44

//llet code 27

/* function removeElement(nums, val) {
  let uniqueIndex = 0; // Pointer for the next position to store elements not equal to val

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) { // Check if the current element is not the value to remove
          nums[uniqueIndex] = nums[i]; // Place the element at the uniqueIndex position
          uniqueIndex++; // Move the unique index forward
      }
  }

  // Return the length of the modified array
  return uniqueIndex;
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const length = removeElement(nums, val);
console.log(length); // Output: 2
console.log(nums.slice(0, length)); // Output: [2, 2] */

//====================================================================================================================

//leet code 15

//-----------------------------------------------------------------------------------------------------------------------

//leetcode 238
/* 
function productExceptSelf(nums){
  const length = nums.length;
    const answer = new Array(length).fill(1);

    let leftProduct = 1;

    for(let i=0;i<length;i++){
      answer[i] = leftProduct;
      leftProduct *= nums[i];
    }

    let rightProduct=1
    for(let i=length-1;i>=0;i--){
       answer[i] *=rightProduct
       rightProduct *=nums[i]
    }
    return answer
} */


//console.log(productExceptSelf([1,2,3,4,5]));


//-------------------------------------------------------------------------------------------------------------------------------------

//leetcode 55

/* let farthest = 0; // Initialize the farthest reachable index

for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // If current index is out of reach, return false
    farthest = Math.max(farthest, i + nums[i]); // Update the farthest reachable index
    if (farthest >= nums.length - 1) return true; // If we can reach the last index, return true
}

return false;
}

// Example usage:
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // Output: true
 */

//----------------------------------------------------------------------------------------------------------------------------