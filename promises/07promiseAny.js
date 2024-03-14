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


Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

/**
 * The Promise.any method will give us the response that what ever promise resolve first.
 * 
 * Consider the scenario where we have three Promise objects: p1, p2, and p3. Each of these promises will resolve after 1, 2, and 5 seconds respectively. When using the Promise.raanyce method, it will  wait for the promises to which is resolve first; it will give us the response from whichever promise resolves or rejects first.
 */

