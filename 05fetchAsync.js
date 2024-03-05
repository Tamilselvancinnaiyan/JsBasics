import('node-fetch').then(async (fetch) => {
  const url = "https://api.github.com/";

  async function github() {
    const data = await fetch.default(url);
    const mydata = await data.json();
    console.log("github received");
    console.log(mydata);
  }


  async function github2() {
    console.log("github2 received");
    fetch().then(res=> res.json(console.log(res)));
  }
  
  github();
  // github2()

}).catch(err => {
  console.error('Failed to import node-fetch:', err);
});
