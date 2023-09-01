// function doSomethingAsync(callback){
//     setTimeout(() => {
//         console.log('Async operation complete')
//         callback()
//     }, 6000);
// }

// function callbackFunction(){
//     console.log('callback executed!')
// }

// doSomethingAsync(callbackFunction)

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('done')
//     },1000)
// })

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve('done'),3000)
// })

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )

function delay(ms){
     return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
     })
}

delay(3000).then(()=>alert('runs after 3s'))