function fetchData(callback) {
  setTimeout(function() {
      const data = { name: "John", age: 30 };
      callback(data); 
  }, 2000);
}


function displayData(data) {
  console.log("Fetched data:", data);
}

fetchData(displayData);
