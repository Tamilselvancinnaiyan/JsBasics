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


Promise.race([p1, p2, p3])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

/**
 * The Promise.race method will give us the response that resolves or rejects first.
 * 
 * Consider the scenario where we have three Promise objects: p1, p2, and p3. Each of these promises will resolve after 1, 2, and 5 seconds respectively. When using the Promise.race method, it will not wait for all promises to resolve; it will give us the response from whichever promise resolves or rejects first.
 */

