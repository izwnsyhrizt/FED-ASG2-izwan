document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');
    const addToCartButton = document.getElementById('add-to-cart-btn');
    const lottieContainer = document.getElementById('lottie-container');
    const animationMessage = document.getElementById('animation-message');

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
                    <p><strong>Seller:</strong> <a href="account.html">${"John Doe"}</a></p>
                    <p><strong>Category:</strong> <a href="category-detail.html">${product.category}</a></p>
                    <p><strong>Condition:</strong> ${getRandomCondition()}</p>
                </div>
            </div>
        `;
    }

    function getRandomCondition() {
        return Math.random() < 0.5 ? 'New' : 'Secondhand'; // Randomly assigns condition
    }

    addToCartButton.addEventListener('click', () => {
        // Hide Add to Cart button
        addToCartButton.style.display = 'none';

        // Show animation
        lottieContainer.style.display = 'block';
        animationMessage.textContent = 'Adding to Cart...';

        // Simulate an add-to-cart process
        setTimeout(() => {
            animationMessage.textContent = 'Successfully Added to Cart!';
            setTimeout(() => {
                lottieContainer.style.display = 'none'; // Hide animation after a short delay
            }, 1000); // Keep success message visible for a moment
        }, 2000); // Simulate 2 seconds of adding to cart animation
    });

    if (productId) {
        fetchProductDetails(productId);
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }
});
