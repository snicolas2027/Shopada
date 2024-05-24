function openNav() {
  document.getElementById("mySidebar").style.width = "20vw";
  document.getElementById("container").style.marginLeft = "19vw";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("container").style.marginLeft = "20vw";
}

let cart = [];

function pasok(name, price) {
  cart.push({ prod_name: name, prod_price: price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPriceSpan = document.getElementById("totalPrice");
  const custOrderInput = document.getElementById("cust_order");

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.prod_price;
    cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.prod_name} - ${item.prod_price} PHP</p>
                <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
  });

  totalPriceSpan.innerText = totalPrice;
  custOrderInput.value = JSON.stringify(cart);
}


