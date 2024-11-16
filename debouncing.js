/* Debouncing:

    Waits for a pause in the event to trigger the function.
    Useful when you want the function to run after the user has finished the event (e.g., typing or resizing).

Throttling:

    Ensures that the function is called at most once every specified time interval, no matter how frequently the event is triggered.
    Useful when you want the function to run at regular intervals (e.g., during scrolling or mouse movement). */
//------------------------------------------------------------------------------------------------------------------------------------------->

//create a button UI and add debounce as follows
//-->show button pressed x times every time a button is pressed
//-->increase "trggered y times" count after 800ms of debouce

/* const btn=document.querySelector('.increment_btn')
const btnPress=document.querySelector('.increment_pressed')
const count=document.querySelector('.increment_count')

var pressedCount=0
var triggerdCount=0


const myDebounce=(cb,d)=>{
    let timer;
  
    return function(...args){
        if(timer) clearTimeout(timer)
  timer=setTimeout(()=>{
   cb(...args)
  },d)
    }
}

const debounceCount=myDebounce(()=>{
    triggerdCount +=1
    count.innerHTML=triggerdCount
},2000)

btn.addEventListener("click",()=>{
    btnPress.innerHTML=++pressedCount
    debounceCount()
}) */

//-----------------------------------------------------------------------------------------------------------------------------------------------

//create a button UI and add debounce as follows
//-->show button pressed x times every time a button is pressed
//-->increase "trggered y times" count after 800ms of throttle

/* const btn=document.querySelector('.increment_btn')
const btnPress=document.querySelector('.increment_pressed')
const count=document.querySelector('.increment_count')

var pressedCount=0
var triggerdCount=0

const myThrottle=(cb,d)=>{
    let last=0

    return(...args)=>{
      let now=new Date().getTime()
      if(now-last<d){
          return
      }else{
        last=now
        return cb(...args)
      }
    }

}
var throttled=myThrottle(()=>{
    triggerdCount+=1
    count.innerHTML=triggerdCount
},1000)

btn.addEventListener("click",()=>{
    btnPress.innerHTML=++pressedCount
    throttled()
}) */