//10. Closures

//A closure gives you access to an outer function’s scope from an inner function:
/* 
Closures: A closure is a function that remembers and accesses variables from its lexical scope, 
even when the function is executed outside of that scope. */

//Lexical Scope: Variables are accessible in the function where they were originally declared.


//------------------------------------------------------------------------------------------------------------------------------//
//closure example 1

/* function outer(){
    const secreat='secret'
    
 function inner(){
        console.log(`Hello there secreat is: ${secreat}`);
        
    }
    return inner 
}

const value=outer()// this will give acccess to inner()

value() 
 */
//outer()()//this is also correct 


//------------------------------------------------------------------------------------------------------------------------------//
//closure example 2

/* function newAccount(name,initialBalance){
    let balance=initialBalance
 
    function showBalance(){
     console.log(`hey ${name} your balance is ${balance}`);
     
    }
    return showBalance
   }
 
 const john=newAccount('john',10000)
 const bob=newAccount('bob',20000)
 
 john()
 bob() */


//------------------------------------------------------------------------------------------------------------------------------//

//example 3
/* 
var e=10

function sum(a){
   return function(b){
     return function(c){
        return function(d){
            return a+b+c+d+e
        }
     }
   }
}

console.log(sum(1)(2)(3)(4)); */

//------------------------------------------------------------------------------------------------------------------------------//
//example 4

/* function createBase(num){
    return function innerNum(number){
      console.log(number+num);
      
    }
 }
 
 var addSix=createBase(6)
 addSix(10) 
 addSix(21) */
//------------------------------------------------------------------------------------------------------------------------------//

//example 5

/* function a(){
    for(var i=0;i<3;i++){
    setTimeout(function(){
     console.log(i);
     
    },i*1000)
    }
}

a() */ //===>3,3,3

//------------------------------------------------------------------------------------------------------------------------------//

//example 6

//how would you implememnt a closure to create a private counter

/* function counter(){
    var counter=0

    function add(increment){
        counter +=increment
    }

    function retreive(){
        return "counter =",+counter 
    }

    return{
        add,
        retreive
    }
}

const c=counter()
c.add(5)
c.add(10)
c.add(10)
console.log(c.retreive());
 */

//------------------------------------------------------------------------------------------------------------------------------//

//example 07

/* let view
function likeVideo(){
    let called=0

    return function(){
        if(called >0){
  console.log('alreday subscribed!!!');
  
        }else{
            view='roadside coder'
            console.log("subscribe to",view);
            called++
        }
    }
}

let subscribed=likeVideo()

subscribed()
subscribed() */
//---------------------------------------------------------------------------------------------------------------------------------

/* function outerFunction() {
    let count = 0; // Local variable, part of the closure
    return function innerFunction() { // innerFunction forms a closure
      count++; // Modifies the count variable from outerFunction's scope
      return count; // Returns the incremented value
    };
  }
  
  const increment = outerFunction(); // Calls outerFunction, returns innerFunction with closure over 'count'
  
  console.log(increment()); // First call, count becomes 1
  console.log(increment()); // Second call, count becomes 2 */
  