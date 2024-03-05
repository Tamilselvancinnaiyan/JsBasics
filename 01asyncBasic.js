async function getData() {
  return("hello world!");
};

const data= getData();
console.log(data);  //without handling the promise

const mydata= getData();
mydata.then((res) => console.log(res)); //after handling the promise


