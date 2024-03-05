//using timeouts

  const p = new Promise((resolve, reject) =>{
    setTimeout(() =>{resolve("new promise data");
  },10000  );
  });

  //until the promise is resolved after 10seconds nothing will be returned
  async function getDataWithTimeout(){
  const data = await p;
  console.log("****************************************************************");
  console.log(data);
  console.log("inside async function");

  };


  //resolving promise using .then method

    function thenmethod(){
      p.then((res)=> console.log(res));
      console.log("using .then method");
    };



//using withoutTimeout
  const r= new Promise((resolve, reject)=>{
    resolve ("withTimeout using");
    console.log("log message inside a timeout function");
  });

  async function getDataWithoutTimeout(){
    const data = await r;
    console.log(data);
  };


  getDataWithTimeout();
  thenmethod()
  getDataWithoutTimeout();