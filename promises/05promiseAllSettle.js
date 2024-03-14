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


Promise.allSettled([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

/**
 * Similarly, the allSettled method will give us the response irrespective of whether the promises are fulfilled or rejected.
 * 
 * Consider the scenario where we have three Promise objects: p1, p2, and p3. Each of these promises will resolve after 1, 2, and 5 seconds respectively. When using the Promise.allSettled method, it will wait for all promises to resolve before providing the response. Unlike the Promise.all method, if any one of the promises, let's say p1, throws an error before the 1-second mark, it will capture the error and wait for all the promises to be completed. Then, it will show us the result for each promise with its status:
 * 
 * - Status: Fulfilled (Resolved)
 * - Status: Rejected
 */
