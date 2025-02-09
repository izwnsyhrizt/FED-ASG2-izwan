document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Function to get random product condition
    function getRandomCondition() {
        return Math.random() > 0.5 ? 'New' : 'Second-hand';  // Randomly choose between 'New' and 'Secondhand'
    }

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
        const condition = getRandomCondition();
        productDetails.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-desc">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <p><strong>Category:</strong> <a href="category-detail.html?category=${product.category}">${product.category}</a></p>
                    <p><strong>Condition:</strong> ${condition}</p>
                    <p><strong>Seller:</strong> <a href="account.html">John Doe</a></p>
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
