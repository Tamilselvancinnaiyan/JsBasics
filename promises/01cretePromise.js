function shopping(items) {
  return new Promise(function(resolve, reject) {
      if (items.length === 0) {
          reject("No items to shop for.");
      } else {
          resolve(items);
      }
  });
}

const items = ["a", "b", "c", "d"];
// const items = "";

shopping(items)
  .then(function(items) {
    const cart = items.join(", ");
    console.log("Items to shop for:", cart);
  })
  .catch(function(error) {
    console.error("An error occurred:", error);
  });

