function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
  }
  
  window.onload = function () {
    if (document.getElementById("cartItems")) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let output = "<ul>";
      cart.forEach(item => {
        output += `<li>${item.name} - $${item.price}</li>`;
      });
      output += "</ul>";
      document.getElementById("cartItems").innerHTML = output;
    }
  };
  