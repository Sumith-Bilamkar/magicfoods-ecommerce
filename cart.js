// Initialize an empty cart
const cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
}

// Function to display the cart contents
function displayCart() {
    // You can customize how you want to display the cart items here
    alert("Cart Contents:\n" + JSON.stringify(cart));
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const itemName = button.dataset.itemName;
        addToCart(itemName);
        alert(itemName + " added to cart!");
    });
});

// Event listener for "View Cart" button
document.getElementById("view-cart").addEventListener("click", () => {
    displayCart();
});
