/* const bob={
    
    
    firstName:"kusal",
    lastName:"dhanajya",
    childObj:{
        newName:"Nimna",
        sayName:function(){
        
            console.log(`hello my name is ${this.firstName} ${this.lastName}`);
            console.log(`my new name is ${this.newName}`);
            
         }
    }
   
}


bob.childObj.sayName()//always this refers to the parent (in this case childObj) */
//--------------------------------------------------------------------------------------------------------------//
/* const bob={
    
    
    firstName:"kusal",
    lastName:"dhanajya",
    childObj:{
     newName:"Nimna",
        getDetails:function(){
        const nestedArrow=()=>console.log(this.newName,this.firstName);//===>arrow function inherits "this" from its parent scope. since getDratils() points its this to childObj
        nestedArrow()
            
         }
    }
   
}

bob.childObj.getDetails() */

//--------------------------------------------------------------------------------------------------------------//
//in a class "this" refers to the variables in the constructor

//--------------------------------------------------------------------------------------------------------------//


/* 
const user={
    name:"kusal",
    logMessage:function(){
       console.log(this.name);
       
    }
}

setTimeout(user.logMessage,1000) */// since this is executing inside setTime out logMessage is lookig at window object

//solution

/* setTimeout(function(){
    user.logMessage()
},1000) */

//--------------------------------------------------------------------------------------------------------------//

//Simple calculator program(have to check this in browser)

/* let calculator={
    read(){
        this.a=Number(prompt("a = :",0))
        this.b=Number(prompt("b = :",0))
    },
    sum(){
    return this.a+this.b
    } ,
    multipication(){
        return this.a*this.b
    }

}

calculator.read()
console.log(calculator.sum()); */
//console.log(calculator.multipication());
//--------------------------------------------------------------------------------------------------------------//
/* var length=4
function callback(){
    console.log(this.length);
    
}
const object={
    length:5,
    method(fn){
    fn()
    }
}
object.method(callback) */
/* Here's the critical part: When fn() (which is callback) is invoked, it is called as a regular function, not as a method of the object. 
In a regular function call, this is determined by the default binding, which refers to the global object */
//--------------------------------------------------------------------------------------------------------------//
