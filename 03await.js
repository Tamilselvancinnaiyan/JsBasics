const p = new Promise((resolve, reject) =>{
  resolve("new promise data");
});


async function getData(){
 const data = await p;
 console.log(data);
};

getData();