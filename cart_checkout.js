const cartItemsContainer = document.querySelector('.cart-items');
const totalAmountDisplay = document.getElementById('total-amount');
const checkoutForm = document.getElementById('checkout-form');

// Access cart data from dashboard.js (assuming it's defined there)
const cart = window.cart || []; // Check if cart is defined in dashboard.js

// Function to calculate total amount
function calculateTotalAmount() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity; // Multiply price by quantity
  });
  totalAmountDisplay.textContent = `Total: &#8369; ${total.toFixed(2)}`;
}

// Function to display cart items
function displayCartItems() {
  cartItemsContainer.innerHTML = ''; // Clear existing items
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Add image (replace with your image logic)
    const image = document.createElement('img');
    image.src = `assets/${item.image}`; // Assuming image paths are in assets folder
    image.alt = `${item.name} Image`;
    cartItem.appendChild(image);

    // Add product name and quantity
    const details = document.createElement('div');
    details.innerHTML = `<h3>${item.name}</h3><p>Quantity: ${item.quantity}</p>`;
    cartItem.appendChild(details);

    // Add remove button (replace with your button logic)
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromCart(item.id); // Assuming you have an `removeFromCart` function
      displayCartItems(); // Update display after removal
      calculateTotalAmount(); // Update total after removal
    });
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);
  });
}

// Call functions to display cart items and calculate total initially
displayCartItems();
calculateTotalAmount();

// Make sure these functions are also called after adding/removing items from cart
// (Update your dashboard.js logic to trigger these functions after cart updates)