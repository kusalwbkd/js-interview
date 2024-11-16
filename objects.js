

/* const age = 40;
let random = 'random-value';
random = 'age';
const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: '123 main street',
    },
  },
  'random-value': 'random',
};
console.log(person['job']['company']['name']);// bracket notation
console.log(person[random]); */


//-----------------------------------------------------------------------------------------------------//


//this with normal functions
//points to the left of the dot

/* const john = {
    firstName: 'john',
    lastName: 'anderson',
    fullName: function () {
      //console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
  const bob = {
    firstName: 'peter',
    lastName: 'sanders',
    fullName: function () {
      console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };

john.fullName()

 */

//----------------------------------------------------------------------------------------------------//

//factory functions

/* function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);


person1.greet(); // Hello, my name is Alice and I am 30 years old. */

//----------------------------------------------------------------------------------------------------//
//constructor function

/*  function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName

    this.fullName=function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

const john=new Person('john','anderson')
john.fullName() 

const susy=new john.constructor('susy','carpenter')//this is also a way
susy.fullName() */

//----------------------------------------------------------------------------------------------------//
//prototype property

/* function Account(name,initialBalance){
 this.name=name
 this.balance=initialBalance

}
const john=new Account('john',1000)
const bob=new Account('bob',1000)

Account.prototype.bank='CHASE'
Account.prototype.deposit=function(amount){
  this.balance+=amount
  console.log(`hello there ${this.name} your balance is ${this.balance}`);
  
}
john.deposit(300)
console.log(john);
console.log(john.bank);
 */
//----------------------------------------------------------------------------------------------------//
//1. Object Creation

/*  let person={
    name: 'Kusal',
    age: 25,
    greet:function(){
     console.log(`Hello my name is ${this.name}`);
     
    }
}
person.name='pakaya'
person.greet() 
 */

//----------------------------------------------------------------------------------------------------//

//Object spread and rest operator
/* 
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // Spread operator
console.log(obj2); // Output: {a: 1, b: 2, c: 3}

let { a, ...rest } = obj2; // Rest operator
console.log(rest); // Output: {b: 2, c: 3}
 */
//----------------------------------------------------------------------------------------------------//
//8. Object Referencing

/* let objA = { x: 10 };
let objB = objA; // Both reference the same object
objB.x = 20;
console.log(objA.x); // Output: 20 */

//----------------------------------------------------------------------------------------------------//
/* let userObj = { id: 1, username: 'kusal' };
console.log(Object.keys(userObj)); // Output: ['id', 'username']
console.log(Object.values(userObj)); // Output: [1, 'kusal']
console.log(Object.entries(userObj)); // Output: [['id', 1], ['username', 'kusal']]
 */
//----------------------------------------------------------------------------------------------------//

/* let frozenObj = Object.freeze({ foo: 'bar' });
frozenObj.foo = 'baz'; // No effect
console.log(frozenObj.foo); // Output: bar

let sealedObj = Object.seal({ foo: 'bar' });
sealedObj.foo = 'baz'; // Allowed
sealedObj.newProp = 'new'; // Not allowed
console.log(sealedObj.foo); // Output: baz
 */
//----------------------------------------------------------------------------------------------------//4

/* const func=(function(a){
delete a 
return a
})(5)
console.log(func);//==> delete key word can be only used when we want to delete something from an object. in here a is a local variable
 */

//----------------------------------------------------------------------------------------------------//
/* const property="first  name"
const name="kusal"

const user={
    [property]:name
}
console.log(user); //dynamic object adding */

//----------------------------------------------------------------------------------------------------//


//loop through an object
/* const user={
    name:"kusal",
    age:20,
    isAwesome:true
}

for(key in user){
  console.log(user[key]);
  
} */

  //----------------------------------------------------------------------------------------------------//

/*   const obje={
    a:"one",
    b:"two",
    a:"three"
  }

  console.log(obje); */
  //----------------------------------------------------------------------------------------------------//

/*   let nums={
    a:100,
    b:200,
    title:"my nums"
  }

  function multiplyByTwo(obj){
    for(key in obj){
        if(typeof obj[key]==='number'){
          obj[key] *=2
        }
    }
  }
  multiplyByTwo(nums)
  console.log(nums);
   */

    //----------------------------------------------------------------------------------------------------//
/* 
    const a={}
    const b={key:"b"}
    const c={key:"c"}
    const d={}
   a[b]=123 //==a["[object Object]"]
   a[c]=456
   console.log(a[c]);//===>456/, a[b]====>123,a[d]=456 */
   
    //----------------------------------------------------------------------------------------------------//
/* 
    const user={
        name:"kusal",
        age:23
    }

    const obj=JSON.stringify(user)
    
const parse=JSON.parse(obj)     */
    //----------------------------------------------------------------------------------------------------//

    //console.log([..."kusal"]);
 //----------------------------------------------------------------------------------------------------//

/* 
let c={greeting:"hey"}
let d 
d=c
c.greeting="helllo"

console.log(d.greeting);
 */

 //----------------------------------------------------------------------------------------------------//
/* console.log({a:1}=={a:1}); 
console.log({a:1}==={a:1}); */
//objects are compared by reference not by the value

/* let person={name:"lydia"}
const members=[person]
console.log(members);
person=null
console.log(members);//====>

//person.name=null

//console.log(members); */
 //----------------------------------------------------------------------------------------------------//

/*  const value={number:10}
//value is cloned to x
 const multiply=(x={...value})=>{
console.log((x.number *=2));

 }
multiply()//==>20 //value is just cloned, original object doesn't change
multiply(value)//original object changed
multiply() */

 //----------------------------------------------------------------------------------------------------//


 /* function changeAgeAndReference(person){
person.age=25
person={
    name:"john",
    age:50
}
return person
 }

 const personObj1={
    name:"alex",
    age:30
 }

 const personObj2=changeAgeAndReference(personObj1)
 console.log(personObj1);//=> name:"alex",age:25
 console.log(personObj2);//=>name:"john",age:50 */
 
 //deep copy/clone of objects

/*  const user={
    name:"kusal",
    age:30
 }
 
// const objClonne=Object.assign({},user)// method 1
//const objClonne=JSON.parse(JSON.stringify(user))==>method 2
//const objClonne={...user}==>method 3
 objClonne.age=20
 console.log(user,objClonne);
  */