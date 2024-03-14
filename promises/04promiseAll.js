const p1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("p1 sucess after three second")
    }, 3000);
})

const p2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject("p2 throws error in one second")
        resolve("p2 sucess after one second")
    }, 1000);
})

const p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("p1 sucess after 5 second")
    }, 5000);
})


Promise.all([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });



  /**
 * This method is commonly known as "fail fast."
 * 
 * Consider the scenario where we have three Promise objects: p1, p2, and p3. Each of these promises will resolve after 1, 2, and 5 seconds respectively. When using the Promise.all method, it will wait for all promises to resolve before providing the response. However, if any one of the promises, let's say p1, throws an error before the 1-second mark, the entire Promise.all will fail immediately. It won't wait for the remaining promises to complete; instead, it will throw the error in 1 second. This behavior is why it's called a "fail fast" method.
 * 
 */
