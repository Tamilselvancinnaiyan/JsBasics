function asyncOperation1() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Async operation 1 completed");
          resolve("Result of async operation 111");
      }, 1000);
  });
}

function asyncOperation2(resultFromAsync1) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Async operation 2 completed with result:", resultFromAsync1);
          resolve("Result of async operation 2");
      }, 1000);
  });
}

asyncOperation1()
  .then(result =>  asyncOperation2(result))
  .then(finalResult => {
      console.log("Final result:", finalResult);
      
  })
  .catch(error => {
      console.error("An error occurred:", error);
  });
