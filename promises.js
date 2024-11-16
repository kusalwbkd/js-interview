 
/* function SubscribeTheVideo(username,cb){
    setTimeout(() => {
        cb(`Subscribe to ${username}`) 
       
        
    }, 1000);
}
function LikeTheVideo(video,cb){
    setTimeout(() => {
        cb(`Like  to ${video}`) 
    }, 500);
}

function shareTheVideo(video,cb){
    setTimeout(() => {
        cb(`Like  to ${video}`) 
    }, 800);
}
SubscribeTheVideo("kusal",(message)=>{
    console.log(message);

})

LikeTheVideo("Javascript",(message)=>{
    console.log(message);

})
shareTheVideo("Javascript",(message)=>{
    console.log(message);

})
console.log("end"); */ //==>without promises

/* The function inside setTimeout does not return a value immediately. It schedules the task to run after a delay (1 second), 
so when you try to return the value immediately, 
it results in undefined because the actual return statement inside the setTimeout callback hasn't executed yet. */
//-----------------------------------------------------------------------------------------------------------------------------------
/* const sub=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const result=true
        if(result) resolve("subscribe to video")
            else reject(new Error('why are not you subscribed?'))
    }, 1000);
})

sub.then((res)=>console.log(res)).catch((res)=>console.log(res))
console.log("end"); */
//-----------------------------------------------------------------------------------------------------------------------------------
 /* console.log("start");

function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 1000);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Like  to ${video}`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 800);
    })
   
}
SubscribeTheVideo("good video").then((res)=>{
    console.log(res);
    return LikeTheVideo("kusasl")
    
}).then((res)=>{
    console.log(res);
     return shareTheVideo("pakaya")
}).then((res)=>{
    console.log(res);
    
})
console.log("end"); */
 
//-----------------------------------------------------------------------------------------------------------------------------------

//promise.all()

/* console.log("start");


function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 1000);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(`some error`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 800);
    })
   
}

Promise.all([
    LikeTheVideo("kusasl"),
     shareTheVideo("pakaya")

]).then((res)=>{
    console.log(res);
    
}).catch((err)=>console.log('some error occured'))

console.log("end"); */
//one promise fail will fail all

//-----------------------------------------------------------------------------------------------------------------------------------
//promise.race will return the first promise that suceed or fail

/* console.log("start");


function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 400);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(`some error`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 800);
    })
   
}

Promise.race([
    SubscribeTheVideo("nimna"),
    LikeTheVideo("kusasl"),
     shareTheVideo("pakaya")

]).then((res)=>{
    console.log(res);
    
}).catch((err)=>console.log('some error occured'))

console.log("end") */

//--------------------------------------------------------------------------------------------

//promise.allsettled will return the all promises whether suceed or not

/* console.log("start");


function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 400);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(`some error`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 800);
    })
   
}

Promise.allSettled([
    SubscribeTheVideo("nimna"),
    LikeTheVideo("kusasl"),
     shareTheVideo("pakaya")

]).then((res)=>{
    console.log(res);
    
}).catch((err)=>console.log('some error occured'))

console.log("end")  */

//--------------------------------------------------------------------------------------------

//promise.any will return the first promise that suceed, ignore all rejected oneds

 /* console.log("start");


function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 400);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(`some error`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 300);
    })
   
}

Promise.any([
    SubscribeTheVideo("nimna"),
    LikeTheVideo("kusasl"),
     shareTheVideo("pakaya")

]).then((res)=>{
    console.log(res);
    
}).catch((err)=>console.log('some error occured'))

console.log("end")  
 */
//------------------------------------------------------------------------------------------------------------------------------


/*  const callPromises=async()=>{
    console.log("start");
    
     const msg1=await SubscribeTheVideo("nimna")
    const msg2=await LikeTheVideo("sachintha")
    const msg3=await SubscribeTheVideo("kusal")
    console.log(msg1,msg2,msg3);

 console.log("end");
 
 
    
}
callPromises()
function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 400);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${video} like the video`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 300);
    })
   
} 
 */
    //------------------------------------------------------------------------------------------

/* console.log("start");

const promise1=new Promise((resolve,reject)=>{
    console.log(1);
    resolve(2)
    
})
promise1.then((res)=>{
    console.log(res);
    
})
console.log("end");//start,1,end,2
 */
//------------------------------------------------------------------------------------------
/* console.log("start");

const fn=()=>{
  return  new Promise((resolve,reject)=>{
        console.log(1);
        resolve("success")
        
    })
}
console.log("middle");
fn().then((res)=>{
    console.log(res);
    
})

console.log("end"); */
//start,middle,1,end,success
//----------------------------------------------------------------------------------------------------------------------------

/* function job(){
    return new Promise((resolve,reject)=>{
        reject()
    })
}

let promise=job()
promise.then(function(){
    console.log("success 1");
    
}).then(function(){
    console.log("success 2");
    
}).then(function(){
    console.log("success 3");
    
}).catch(function(){
    console.log("error 1");
    
}).then(function(){
    console.log("success 4");
    
}) */
//After a catch() block handles the error, the chain continues with the next .then() block, regardless of the rejection.

//--------------------------------------------------------------------------------------------------------------------------------

/* function job(state){
return new Promise((resolve,reject)=>{
    if(state){
 resolve("success")
    }else{
   reject("fail")
    }
})
}

let promise=job(true)
promise.then(function(data){
console.log(data);
return job(false)

}).catch(function(error){
console.log(error);
return"error caught"
}).then(function(res){
console.log(res);
return job(true)

}).catch(function(error){
console.log(error);

}) */

//--------------------------------------------------------------------------------------------------------------------------------
/* function job(state){
    return new Promise((resolve,reject)=>{
        if(state){
     resolve("success")
        }else{
       reject("fail")
        }
    })
    }
    let promise=job(true)  

    promise.then((data)=>{
   console.log(data);  //success
   return job(true)
    }).then((data)=>{
      if(data !== 'victory'){
       throw "defeat" //rejected promise from now on
      }
      return job(true)
    }).then((data)=>{
    console.log(data);
    
    }).catch((error)=>{
   console.log(error);//fail
   return job(false)
    }).then((data)=>{
    console.log(data);
    return job(true)
    
    }).catch((error)=>{
        console.log(error);//error caught
        return "error caught"
     }).then((data)=>{
        console.log(data);
        return new Error("test")//return a new promise. not an error
        
        }).then((data)=>{
            console.log("success");
            
        }).catch((error)=>{
            console.log("error");
            
         }) */
//---------------------------------------------------------------------------------------------------------------------------------------

/* const firstPromise=new Promise((resolve,reject)=>{
    resolve("first")
})

const secondPromise=new Promise((resolve,reject)=>{
    resolve(firstPromise)
})

secondPromise.then((res)=>{
    return res
}).then((res)=>console.log(res)) */

//---------------------------------------------------------------------------------------------------------------------------------------
//solving promises recuursively

/* function SubscribeTheVideo(username){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Subscribe to ${username}`)  
        }, 400);
    
    })
}

function LikeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(`some error`) 
        }, 500);
    })
    
}

function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`share  to ${video}`) 
        }, 800);
    })
   
}
function RecPromise(funcPromises) {
    if (funcPromises.length === 0) {
      return;
    }
  
    const currPromise = funcPromises.shift();  // Remove and get the first promise
    currPromise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        RecPromise(funcPromises);  // Recursively call the next promise
      });
  }
  
  // Assuming SubscribeTheVideo, LikeTheVideo, and shareTheVideo are functions returning promises
  RecPromise([
    SubscribeTheVideo("nimna"),  // Call the function to get the promise
    LikeTheVideo("kusal"),       // Call the function to get the promise
    shareTheVideo("pakaya")      // Call the function to get the promise
  ]);
   */

  //-----------------------------------------------------------------------------------------------------------

  