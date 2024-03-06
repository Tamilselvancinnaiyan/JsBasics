
function fetchData(data, displayData){
  setTimeout(function(){
    const newdata = {name: data.name, age: data.age}
    displayData(newdata);
  },2000); 
}

function displayData(data){
  console.log(data);
}

const data= {name:"thamizh", age:0};

fetchData(data, displayData);