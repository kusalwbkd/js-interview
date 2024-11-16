/* class Stack{
    constructor(){
        this.stack=[]
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if( this.isEmpty()){
            return "Stack is Empty. Can't perform pop.";
        }
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty()) {
          return "Stack is Empty. Can't perform peek.";
        }
    
        return this.stack[this.size() - 1];
      }

    isEmpty(){
     return this.size()===0
    }

    size(){
        return this.stack.length
    }
}
const stack = new Stack();

stack.push(10);
stack.push(69);
stack.push(420);


console.log(stack.size());



console.log(stack.isEmpty());

console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
 */
//<---------------------------------------------------------------------------------------------------------------------->
// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the\
/* 
const reverseFunction=(s)=>{

    const splitS=s.split(" ")
    const stack=[]
    for(let i of splitS){
   stack.push(i)
    }

    let finalS=""
    while(stack.length){
      const current=stack.pop()
      if(current){
         finalS +=" "+current
      }
    }

    return finalS.trim()
    
}

console.log(reverseFunction("the sky is blue")); */
//----------------------------------------------------------------------------------------------------------------------------------------

// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false

/* const isValid=(s)=>{

    const stack=[]

    for(let i=0;i<s.length;i++){
        const char=s[i]

        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
            console.log("stack is",stack);
            
          }else if(char === ")" || char === "]" || char === "}"){
            if (isEmpty(stack)) {
                return false;
              }
              const top = stack.pop();

              if (
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
              ) {
                return false;
              }


        
          }
    }

    function isEmpty(stack) {
        return stack.length === 0;
      }
      return isEmpty(stack);
}

const string1 = "([]{})";
console.log(isValid(string1)); */