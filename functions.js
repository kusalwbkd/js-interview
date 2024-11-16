//Functions

//function expression=> Assigning a function to a variable (anonymous function):

//************************************************************************************************************************************* */
// Rest Parameters 

/* function sum(...numbers){
    return numbers.reduce((acc,curr)=>{
     acc +=curr

     return acc
    },0)


}

console.log(sum(1,2,3,4)); */

//************************************************************************************************************************ */

//7. IIFE (Immediately Invoked Function Expression)

/* (function hello(){
console.log("hello");

})()

  (function(x){
    return (
        function(y){
            console.log(x);
            
        }
    )(2)
  })(1)//==> output 2
 */

//************************************************************************************************************************ */

//8. Higher-Order Functions

//A function that takes another function as an argument or returns a function:

/* function higerOrder(fn,x){
  return fn(x)
}

function square(x){
    return x*x
}

console.log(higerOrder(square,5));
 */
//************************************************************************************************************************ */

//callback functions


/* function fetchData(callback){
    setTimeout(() => {
       callback('data received')
          
    }, 2000);
}

fetchData((message)=>{
console.log(message);

}) */

//************************************************************************************************************************ */



 // 16. Currying

 //A function that transforms a function with multiple arguments into a sequence of functions:

/*  function multiply(a) {
    return function (b) {
      return a * b;
    };
  }
  
  const double = multiply(2);
  console.log(double(5)); // Output: 10 */
  

//17. Function Overloading (via arguments object)

/* function sum(a, b, c) {
    if (typeof c === 'undefined') {
      return a + b;
    }
    return a + b + c;
  }
  
  console.log(sum(1, 2));    // Output: 3
  console.log(sum(1, 2, 3)); // Output: 6
   */




//functions hositing

/* Function Declarations: These are fully hoisted, meaning both the function name and the function body are moved to the top of their scope during compilation. 
That's why you can call the function before its actual declaration in the code.

Arrow Functions (or Function Expressions): These are treated as variable assignments. 
The variable is hoisted, but the function itself is only assigned to the variable when the code reaches that point.
 Until then, the variable is undefined or uninitialized. */

/*  var x=21
 var fun =function(){
    console.log(x);
    var x=20
    
 }
 fun() */ //===>give undefined


 //---------------------------------------------

 