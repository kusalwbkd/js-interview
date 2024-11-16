
//    In normal functions, a this variable is created which references the objects that call them. 


  /*  const obj = {
    name: "Object",
    print: function() {
      console.log(this)
    },
  } */
  
//  obj.print()//=>obj

/* const obj = {
    name: "Object",
    print: function() {
      console.log(this)
    },
  }
  
  const printer = obj.print
  
  printer() */

/* 
  console.log(this)

const obj = {
  name: "Object",
  print: function() {
    console.log("inside print function",this)

    function print2() {
      console.log("inside print 2 function",this)
    }

    print2()
  },
}

obj.print() */

//in here  print2 have refernce to print()
/* let obj = {
    name: "Object",
    print: function() {
      const that = this
      function print2() {
        console.log(that.name)
      }
      print2()
    },
  }
  
  obj.print() */

/*   let obj = {
    name: "Object",
    print: function() {
      function print2() {
        console.log(this)
      }
  
      print2.call(this.name)
    },
  }
  obj.print()  */
/*   As seen above, this in print2() would point to the window object if there was no object directly calling.
   However, the this in print() refers to the object obj. print2() is called in the same scope as obj's this. 
   Using the call method of the print2() function, means, 
  "Use the this of print for print2". Hence, print2() uses obj as this. */


 /*  By using an arrow function for print, this function does not automatically create a this variable.
   As a result, any reference to this would point to what this was before the function was created. */

 /*   let obj = {
    name: "Object",
    print: function() {
      const print2 = () => {
        // no automatic this here
        console.log(this)
      }
      print2()
    },
  }
  
  obj.print()  */// before we create this function this refers to obj, 
 /*  let obj = {
    name: "Object",
    print: () => {
      console.log(this)
  
      const print2 = () => {
        console.log(this)
      }
  
      print2()
    },
  }
  
  obj.print() */

/*   The two results are the objects window and window. Why? print being an arrow function didn't create it's own this, same thing with print2,
   so they used what this was before they were declared, which at both points was window. */