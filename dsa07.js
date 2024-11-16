//quick sort

// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

/* function quickSort(arr){
    if (arr.length <= 1) {
        return arr;
      }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=0;i<arr.length;i++){
      if(arr[i]>pivot){
        right.push(arr[i])
      } else if(arr[i]<pivot){
        left.push(arr[i])
      }
    }

    return[...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7])); */

//-------------------------------------------------------------------------------------------------------------------------------------------

//merge sort

// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

/* function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
}

function merge(left,right){
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
      return [...sortedArr, ...left, ...right];

}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])); */

//overlapping intervals

/* const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]] */

//using inbuilt sort

/* function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
  
    // Step 1: Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [];
    let currentInterval = intervals[0];
  
    // Step 2: Iterate over the intervals
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
  
      // Check if current interval overlaps with the next interval
      if (currentInterval[1] >= nextInterval[0]) {
        // Merge the intervals
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
        // No overlap, push the current interval to result and update current interval
        merged.push(currentInterval);
        currentInterval = nextInterval;
      }
    }
  
    // Push the last interval
    merged.push(currentInterval);
  
    return merged;
  }
  
  // Example usage:
  const intervals = [[1, 3], [2,6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals));
  // Output: [[1, 6], [8, 10], [15, 18]] */
  

  