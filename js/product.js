document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    async function fetchProductDetails(id) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await response.json();
            displayProductDetails(product);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    function displayProductDetails(product) {
        productDetails.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-desc">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    }

    if (productId) {
        fetchProductDetails(productId);
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }
});