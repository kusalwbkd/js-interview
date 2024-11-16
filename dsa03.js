// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

/* function maxSubArray(nums){
    let maxSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;
for(let i=0;i<nums.length-1;i++){
    let currentSum=0
    for(let j=i;j<nums.length;j++){
    currentSum=currentSum+nums[j]
    if(currentSum>maxSum){
        maxSum=currentSum
        startIdx=i
        endIdx=j
    }
    }
}

return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
}

console.log(maxSubArray([5,4,-1,7,8]  )); */

//using kaden's algoritham

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
        start = tempStart;
        end = i;
      }
  
      if (sum < 0) {
        sum = 0;
        tempStart = i + 1; // Start a new subarray at the next index
      }
    }
  
    return {
      sum: max,
      subArray: nums.slice(start, end + 1),
    };
  }
  
  console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: { sum: 23, subArray: [5, 4, -1, 7, 8] }
  