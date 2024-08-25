var ul = document.getElementById("ul_pr");
var li = document.querySelectorAll("li");

function add(id){
    // var del_new = document.createElement("button");
    var li_new = document.createElement("li");
    var li_inp = document.createTextNode(id);
    li_new.appendChild(li_inp);
    // li_new.appendChild(document.createTextNode( '\u00A0\u00A0' ) );
    ul.appendChild(li_new);
    // var del_inp = document.createTextNode("Del");
    // del_new.appendChild(del_inp);
    // li_new.appendChild(del_new);
    ul.appendChild(document.createElement("br"));
}

window.emptyList = function () {
    var ul = document.querySelector('#ul_pr');
    var listLength = ul.children.length;
  
    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
    }
  }


 function add(itemId) {
  const ul = document.getElementById("ul_pr");
  
  // Create a new list item
  const li = document.createElement("li");
  li.textContent = itemId;
  
  // Append the new item to the list
  ul.appendChild(li);
}

function emptyList() {
  const ul = document.getElementById("ul_pr");
  ul.innerHTML = "";
}





let cart = [];

// Add item to cart
function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if item already in cart
  } else {
    cart.push({ name: productName, price: price, quantity: 1 }); // Add new item
  }
  updateCart(); // Update the cart display and total
}

// Update the cart display and total
function updateCart() {
  const cartTableBody = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  cartTableBody.innerHTML = ''; // Clear existing table rows
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal; // Calculate total price

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>Rs.${item.price}</td>
      <td>Rs.${itemTotal}</td>
    `;
    cartTableBody.appendChild(row); // Add row to table
  });

  cartTotal.textContent = `Total: Rs.${total}`; // Update total value display
}

// Clear the cart
function emptyCart() {
  cart = []; // Clear the cart
  updateCart(); // Update the cart display and total
}

