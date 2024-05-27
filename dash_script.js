const categoryButtons = document.querySelectorAll('.category-button');
const specialCakesButton = document.querySelector('.special-cakes-button');
const specialCakesContainer = document.querySelector('.product-container[data-product-container="specialcakes"]');

categoryButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productContainer = document.querySelector(`.product-container[data-product-container="${this.dataset.productContainer}"]`);
    
    // Deactivate all product containers
    document.querySelectorAll('.product-container').forEach(container => container.classList.remove('active'));
    
    // Activate the clicked product container
    productContainer.classList.add('active');
    
    // (Optional) Remove active class from other category buttons
    document.querySelectorAll('.category-button.active').forEach(button => button.classList.remove('active'));
    // Add active class to the clicked button
    this.classList.add('active');
  });
});

specialCakesButton.addEventListener('click', function() {
    // Deactivate all product containers
    document.querySelectorAll('.product-container').forEach(container => container.classList.remove('active'));
  
    // Activate the special cakes product container
    specialCakesContainer.classList.add('active');
  
    // (Optional) Remove active class from other category buttons
    document.querySelectorAll('.category-button.active').forEach(button => button.classList.remove('active'));
    // Add active class to the special cakes button
    this.classList.add('active');
  });