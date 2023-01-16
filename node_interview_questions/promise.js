//todo: 1. Create a promise , if true then resolve ,if false then reject

const callMe = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resolve 123')
    }
    else {
        reject(false);
    }
})
callMe
    .then(data => console.log(data))

//todo: 2. Now do this in using async await

const callMeAsync = async () => {
    //asynchronous operation
    setTimeout(() => {
        console.log('after 2 second');
    },2000)
}
const result = await callMeAsync();
console.log(result);