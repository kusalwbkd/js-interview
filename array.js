//ARRAY METHODS

const people=[
    {name:'Bob',age:'20',position:'developer',id:1,salaray:200},
    {name:'peter',age:'25',position:'designer',id:2,salaray:300},
    {name:'sussy',age:'30',position:'the boss',id:3,salaray:500},
    {name:'anna',age:'35',position:'the boss',id:3,salaray:500}
]

//************************************************************************************************************************************//
//forEach

/* people.forEach((person)=>{
console.log(person);

}) */

/* const arr=[2,3,4,5,6,7]

const forEachResult=arr.forEach((ar,i,array)=>{
    array[i]=ar+3
}) */

//************************************************************************************************************************************//

//reduce

/* const total=people.reduce(function(acc,curr){
console.log(`total ${acc}`);
console.log(`current money ${curr.salaray}`);

acc+=curr.salaray

return acc

},0)

console.log(total); */

//************************************************************************************************************************************//

/* let names=['john','peter','bobo','michael']

const lastnaems=['onion','pepper']

//const allNames=[...names,...lastnaems]
const allNames=names.concat(lastnaems)
console.log(allNames);
 */


//************************************************************************************************************************************//

//array.of

/* const friends=Array.of(1,2,3,4)
console.log(friends); */


//array.from

/* const udemy='udemy'
console.log(Array.from(udemy));
 */

/* const arr=Array.from({length:5},(_,index)=>index*2)
console.log(arr);
 */



//************************************************************************************************************************************//

//find,findindex,every,some

/* const grades=['A','B','A','B','C']
const goodGrades=['A','B','A','B']

const allGoodGrades=grades.every((grade)=>grade !=='C')
console.log(allGoodGrades);

const oneBadGrade=grades.some((grade)=>grade === 'C')
console.log(oneBadGrade);

 */

//************************************************************************************************************************************//

//array includes

/* const friuts=['apple','grapes','lemon']
const bob=friuts.includes('apple')
console.log(bob); */

//************************************************************************************************************************************//


//polyfill for map

/* The callback function passed to the map() method in JavaScript can take up to three parameters. Here’s a breakdown of the parameters:
Parameters of the callback function:

    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being processed.
    array (optional): The array that map() was called on. */

/* const numbers=[2,4,6,8]




Array.prototype.myMap=function(cb){

    let temp=[]

    for(let i=0 ;i<this.length;i++){
     temp.push(cb(this[i],i,this))
    }

    return temp
}

const multpliedNumbers=numbers.myMap((num,i,arg)=>num*2)

console.log(multpliedNumbers); */

//************************************************************************************************************************************//

//converting names of people to uppercase using "for"

/* let newPeople=[]
for (let index = 0; index < people.length; index++) {
    const element = people[index].name.charAt(0).toUpperCase()+people[index].name.slice(1).toLowerCase();
    newPeople.push(element)
}

console.log(newPeople); */

//using map

/* const newPeople=people.map((person,index)=>{
    return person.name.charAt(0).toUpperCase()+person.name.slice(1).toLowerCase()
})
console.log(newPeople);
 */

/* people.forEach((person,index,arr)=>{
 arr[index]=person.name.charAt(0).toUpperCase()+person.name.slice(1).toLowerCase()
})

console.log(people);
 */

//************************************************************************************************************************************//

let students=[
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55},


]

/* const goodStudnets=students.filter((student)=>student.marks > 60 && student.rollNumber >15)
console.log(goodStudnets); */

//sum of the marks of the students



/* const totalMarks=students.reduce((acc,curr)=>{

    acc +=curr.marks
    return acc
},0)
console.log(totalMarks); */

//return only names of students who scored more than 60

/* const studentNames=students.filter((student)=>student.marks > 60).map((student)=>student.name)
console.log(studentNames); */

//return only names of students who scored more than 60 after 20 marks added to the students who scored less than 60 and the total marks

/* const addedStudents=students.map((student)=>{
    if(student.marks < 60){
     student.marks +=20
    }
    return student
}).filter((student)=>student.marks >60).reduce((acc,curr)=>{

    acc +=curr.marks

    return acc
},0)


console.log(addedStudents); */


/* const students = [
    {
      id: 1,
      name: 'peter',
      score: 80,
      favoriteSubject: 'math',
    },
    {
      id: 2,
      name: 'susan',
      score: 99,
      favoriteSubject: 'history',
    },
    {
      id: 3,
      name: 'anna',
      score: 85,
      favoriteSubject: 'math',
    },
    {
      id: 4,
      name: 'john',
      score: 34,
      favoriteSubject: 'art',
    },
    {
      id: 5,
      name: 'bobo',
      score: 74,
      favoriteSubject: 'math',
    },
  ]; */

  //MAP challenge
/*   updatedStudents=students.map((student)=>{
     student.role="student"

     return student
  })

  console.log(updatedStudents); */
  
  //FILTER challenge

 /*  const highScores=students.filter((student)=>student.score >=80)
  console.log(highScores); */
  
  ///REDUCE 

//   const averageScore=students.reduce((scoresTotal,student)=>{
   
//    return scoresTotal+=student.score
//   },0)

//   console.log(averageScore/students.length);
  
//REDUCE challenge-2

/* const survey=students.reduce((survey,student)=>{

    const favSub=student.favoriteSubject
    if(survey[favSub]){
     survey[favSub]=survey[favSub]+1
    }else{
        survey[favSub]=1
    }
    return survey

},{})

console.log(survey);
 */