//DSA CHALLENGES

//1.PALINDRONE NUMBER(AN INTEGER IS A PALINDROME WHEN IT READS FORWARD AND BACKWARD THE SAME NUMBER (121 IS PALINDROME), (105 NOT A PALINDROME))
/* 
  const isPalindrome=function(x){
  
  //console.log(x);
return x <0 ? false : x=== Number(x.toString().split("").reverse().join(""))

   
}
console.log(isPalindrome(10)); */


//*********************************************************************************************************************************************** */

//2. fibonnaci number

//f(0)=0, f(1)=1, f(n)=f(n-1)+f(n-2)

//using for loop

/* var fib=function(n){

    const arr=[0,1]

    for(let i=2;i<=n;i++){
     arr.push(arr[i-1]+arr[i-2])
    }

    return arr
}

console.log(fib(1)); */

//using recurssion

/* const fib=function(n){

    if(n<=1){
    return n
    }

    return fib(n-2)+fib(n-1)

}

console.log(fib(4));
 */

//*********************************************************************************************************************************************** */

//3)anagram

//1st method

/* const anagram=(s,t)=>{
  s=s.split("").sort().join("")
  t=t.split("").sort().join("")

  return s===t

}
console.log(anagram('cat','rat')); */

//2nd method

/* const anagram=(s,t)=>{
 if(s.length !==t.length){
    return false
 }

 let obj1={}
 let obj2={}

 for(let i=0; i<s.length;i++){
    obj1[s[i]]=( obj1[s[i]]||0)+1
    obj2[t[i]]=( obj2[t[i]]||0)+1

 }

 for(const key in obj1){
    if(obj1[key] !==obj2[key]) return
 }
 return true
}


 console.log( anagram('rat','tar')); */
  

//*********************************************************************************************************************************************** */

//4)anagram

//1st method
/* 
const twoSum=function(nums,target){
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length-1;j++){
       if(nums[i]+nums[j]===target){
        return[i,j]
       }
    }
  }
}

console.log(twoSum([2,7,5,9],9));
 */

//2nd method

/* const twoSum=(nums,target)=>{
     var obj={}

     for(let i=0;i<nums.length;i++){
     var n=nums[i] //in this case n=2

     if(obj[target-n]>=0){  //when n=2=> obj[26-2]=obj[24]
        return[obj[target-n],i]
     }else{
        obj[n]=i //obj[2]=0
     }
     }
}
console.log(twoSum([2,7,11,15],26)); */

//*************************************************************************************************************************************** */

//5)
// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

/* function maxProfit(prices){
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

//2nd method

/* function maxProfit(prices){
  let minStockPurchasePrice=prices[0]||0
  let profit=0

  for(let i=1;i<prices.length;i++){
    if (prices[i] < minStockPurchasePrice) {
        minStockPurchasePrice = prices[i];
      }
      profit = Math.max(profit, prices[i] - minStockPurchasePrice)

  }
  
return profit
} */