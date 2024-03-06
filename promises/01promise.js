function placeOrder(cartItems) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const orderNumber = Math.floor(Math.random() * 1000);
          resolve(`Order placed successfully! Order number: ${orderNumber}`);
          cartItems.forEach(element => {
            console.log(element);
          });
         
      }, 2000); 
  });
}


const cartItems = ["Book", "Toys", "Ball"];

placeOrder(cartItems)
  .then((message) => {
      console.log(message);
  })
  .catch((error) => {
      console.error("Error placing order:", error);
  });
