Data = ["one", "two", "three", "four", "five", "six"];

//without parsing
console.log("-----------------------------Before parsing--------------------------------");

console.log(Data)

//parsing the array 

console.log("-----------------------------After parsing--------------------------------");
Data.forEach(element => {
  console.log(element);
});

console.log("-----------------------------After parsing into json--------------------------------");


const parse= {
data:Data
};
const json= JSON.stringify(parse);
console.log(json);