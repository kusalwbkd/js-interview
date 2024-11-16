//Call, Bind and Apply 

/* let obj={name:"kusal"}

function sayHello(age){
    console.log("Helllo", this.name, "and your age is",age);
    
}
sayHello.call(obj,24) */

//apply is same as call, but it is taking array of arguments
//----------------------------------------------------------------------------------------------------------------------------------------------

//we can create a new function with bind method
/* let obj={name:"kusal"}

function sayHello(age){
    console.log("Helllo", this.name, "and your age is",age);
    
}
const bindFunc=sayHello.bind(obj,24)
bindFunc() */

//--------------------------------------------------------------------------------------------------------------------------------------
/* var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); 
  console.log(data.getStatus.call(this)); 
}, 0); */

/* We declared the setTimeout function on the global object, 
so within the setTimeout function, the this keyword refers to the global object.
 On the global object, there is a variable called status with the value of "😎". 
 When logging this.status, "😎" gets logged. */

 //--------------------------------------------------------------------------------------------------------------------------------------

/*  const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
  ];

   function printAnimals(i){//this is a constructor function
  this.print=function(){
    console.log('#' + i + ' ' + this.species
        + ': ' + this.name);
   }
   this.print()
  }

  animals.forEach((animal, index) => {
    printAnimals.call(animal, index + 1);
});  */

/* function print(arr){

    arr.forEach((animal,index)=>{
        console.log('#' + index+1 + ' ' + animal.species
            + ': ' + animal.name);
        
    })
}
print(animals) */
//-----------------------------------------------------------------------------------------------------------------------------------

/* const array = ['a', 'b'];
const elements = [0, 1, 2];

// Adding elements to the array
array.push(...elements);

// Log the modified array
console.log(array); // Outputs: ['a', 'b', 0, 1, 2]


const array1 = ['a', 'b'];

// Using concat to create a new array
const newArray = array1.concat(elements);

// Log both arrays
console.log(newArray); // Outputs: ['a', 'b', 0, 1, 2]
console.log(array1);   // Outputs: ['a', 'b'] (original array remains unchanged) */

/* const array = ['a', 'b'];
const elements = [0, 1, 2];
/* array.push(elements);
console.log(array) */;//// output=>[ 'a', 'b', [ 0, 1, 2 ] ]
/* When you call array.push(elements),
 you add the entire elements array as a single element to array.  */

//now we want to print like [ 'a', 'b', 0, 1, 2 ] using apply method
//array.push.apply(array, elements); //[a,b,0,1,2]

//console.log(array); 
/* Here, apply() calls array.push with array as its context (i.e., this value) and elements as the arguments. 
This means that push() treats each element of elements as separate arguments rather than a single array.



 */
//-----------------------------------------------------------------------------------------------------------------------------------
const numbers = [5, 6, 2, 3, 7]

//const numbers = [5, 6, 2, 3, 7]; //we have to find Find min/max in an array

//normal approach

/* const numbers = [5, 6, 2, 3, 7]

let min=+Infinity
let max=-Infinity

for(let i=0; i<numbers.length;i++){
    if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }

}
console.log("min is",min);
console.log("max is",max);
 */

//by using apply method to find max

//console.log(Math.max.apply(null,numbers));


//--------------------------------------------------------------------------------
/* function f() {
    console.log(this);
     // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g(); */

  //--------------------------------------------------------------------------------
/* function f(){
    console.log(this.name);
    
}
f=f.bind({name:"john"}).bind({name:"anne"})
f() */

/* The first bind call creates a new function with its this context set to {name: "john"}. This new function does not modify the original function f,
 but rather returns a new function with the specified context.
The second bind call is attempted on the new function returned from the first bind. However, bind does not support chaining like this. 

The second bind call is essentially ignored because the first bind has already established the context,
 and it does not affect the already bound function. */

   //--------------------------------------------------------------------------------
/* 
   function checkPassword(success,failed){
   
    let password=prompt("password","")
    if(password=="kusal"){
         success()
    }else{
        failed()
    }
   }

   let user={
    name:"kusal dhananjaya",

    loginSucessful(){
      console.log(`${this.name} is logged in`);
      
    },
    loginFailed(){
        console.log(`${this.name} is failed to logged in`);
        
      }
   }

   checkPassword(user.loginSucessful.bind(user), user.loginFailed.bind(user));
  */

   //--------------------------------------------------------------------------------
 /*   function checkPassword(success,failed){
   
    let password=prompt("password","")
    if(password=="kusal"){
         success()
    }else{
        failed()
    }
}


let user={
    name:"kusal dhananjaya",

  login(result){
  console.log(this.name + (result ? 'login succesful':'login failed'));
  
  }
   }
   checkPassword(user.login.bind(user,true), user.login.bind(user,false));
 */

//--------------------------------------------------------------------------------
//to access the global variables using this in arrow functions we should use this.age in global scope
/*  const age=10

var person={
    name:"kusal",
    age:20,
    getAgeArrow:()=>{
        console.log("from arrow",this.age);
        
    },
    getAge(){
        console.log("from normal",this.age);
    }
}
var person2={age:24}
person.getAge.call(person2)//=>24
person.getAgeArrow.call(person2) */
//we can't apply call,bind,apply to arrow functions

//-----------------------------------------------------------------------------------------------------------------------------------

//polyfill for call 

/* let car1 = {
    color: "red",
    company: "fereri"
  }
  
  function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color}--${this.company} car for ${currency} ${price}`);
  }
  
  // Polyfill for `call()` method
  Function.prototype.myCall = function(context = {}, ...args) {
  
    // Check if the context is callable (the function calling `myCall`)
    if (typeof this !== 'function') {
      throw new Error(this + ' is not callable');
    }
  
    // Assign the calling function to a property of the context object
    context.fn = this;  // `this` refers to the function calling `myCall` (in this case, `purchaseCar`)
  
    // Call the function with the provided arguments
    context.fn(...args);
  
    // Optionally, you could delete `context.fn` after calling it to avoid modifying the context object permanently
    // delete context.fn;
  }
  
  // Call the polyfill
  purchaseCar.myCall(car1, 'usd', 10000);
  //since  myCall is called by purchaseCar "this" in myCall refers to purchaseCar
 */
//---------------------------------------------------------------------------------------------------------------------------

//polyfill for bind

let car1 = {
    color: "red",
    company: "fereri"
  }
  
  function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color}--${this.company} car for ${currency} ${price}`);
  }

 // const newfn=purchaseCar.bind(car1,'usd',10000)

 // newfn()
/*  Function.prototype.myBind = function(context = {}, ...args) {
  
    // Check if the context is callable (the function calling `myCall`)
    if (typeof this !== 'function') {
      throw new Error(this + ' is not callable');
    }
  
    // Assign the calling function to a property of the context object
    context.fn = this;  // `this` refers to the function calling `myCall` (in this case, `purchaseCar`)
  console.log(this);
  
    return function(...newArgs){
        console.log(context.fn(...args,...newArgs));
        
       return context.fn(...args,...newArgs)
    }
  } 

  const newFunc=purchaseCar.myBind(car1,"usd",10000)
    

   newFunc() */