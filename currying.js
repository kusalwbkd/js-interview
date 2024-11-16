/* Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of functions,
 each taking a single argument. In JavaScript, 
 currying allows a function to be called with a subset of arguments and return a new function that expects the rest of the arguments. */

 //------------------------------------------------------------------------
 1// without currying
 
/*  function addThreeNumbers(a, b, c) {
  return a + b + c;
}

console.log(addThreeNumbers(1, 2, 3)); */ // Output: 6

//with currying
/* function addThreeNumbers(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  console.log(addThreeNumbers(1)(2)(3));  */ // Output: 6
  //-------------------------------------------------------------------------------------------------------

/*  2//
  const addThreeNumbers = a => b => c => a + b + c;

console.log(addThreeNumbers(1)(2)(3)); // Output: 6
 */

// const addThreeNumbers=(a)=>{
//     return(b)=>{
//      return(c)=>{
//        return a+b+c
//      }
//     }
//   }
//   console.log(addThreeNumbers(1)(2)(3)); 
  //-------------------------------------------------------------------------------------------------------

 //3

/*  function calculatePrice(price, tax, discount) {
    return price + price * tax - discount;
  }
  
  console.log(calculatePrice(100, 0.1, 10)); */

/*   function calculatePrice(price){
 return  function(tax){
      return function(discount){
        return price + price * tax - discount;
      }
    }
  }


  console.log(  calculatePrice(100)(0.1)(10)); */
  
/*   const calculatePrice=price=>tax=>discount=>price + price * tax - discount;
  console.log(calculatePrice(100)(0.1)(10)); */
  //-------------------------------------------------------------------------------------------------------

  //4
/*   function evaluate(operation){
    return function(a){
        return function(b){
           switch(operation){
            case"addition":
            return a+b;

            case"substraction":
            return a-b

            case"multiply":
            return a*b

            case"division":
            return a/b

            default:
                console.log("error");
                
           }
        }
    }
  }

  console.log(evaluate("addition")(10)(5));
  console.log(evaluate("substraction")(10)(5));
  console.log(evaluate("multiply")(10)(5));
  console.log(evaluate("division")(10)(5)); */
  //-------------------------------------------------------------------------------------------------------

  //infinite currying

/*   function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
  }
  console.log(add(5)(2)(4)(8)()); */
  
   //-------------------------------------------------------------------------------------------------------

   //partial application

/*    function sum(a){
    return function(b,c){
       console.log(a+b+c);
       
    }
   } */


   //currying
/*    function sum(a){
   return function(b){
    return function(c){
    console.log(a+b+c);
    
    }
   }
   }
   sum(2)(3)(4)
 */

   //-------------------------------------------------------------------------------------------------------

   