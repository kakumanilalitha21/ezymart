document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('productList');

  // Dummy data for products
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 40 },
  ];

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
});

function addToCart(productId) {
  alert(`Product with ID ${productId} added to cart!`);
}
