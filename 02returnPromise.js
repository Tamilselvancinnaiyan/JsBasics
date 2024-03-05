// return promise
const p = new Promise((resolve, reject) =>{
  resolve("new promise data");
});

async function getData() {
  return p;
};

//The get data method returns a promise that was not handled in the below code.. inorder handling that need to use await

const data= getData();
console.log(data);  


// here ive used the await to handle the promise
async function processData() {
  const data= await getData();
  console.log(data);  
};

processData();


// we can also handle the promise using .then()

const mydata= getData();
mydata.then((res) => console.log(res)); //after handling the promise


