document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');
    const addToCartButton = document.getElementById('add-to-cart-btn');
    const lottieContainer = document.getElementById('lottie-container');
    const animationMessage = document.getElementById('animation-message');
    const surpriseRewardContainer = document.getElementById('surprise-reward-container');
    const body = document.body;
    
    const rewards = [
        "10% off your next purchase!",
        "You've unlocked a discount on your next order!",
        "Congratulations, you earned a free shipping code!",
        "Surprise! You unlocked a limited-time badge!"
    ];

    const achievements = [
        { name: "First Purchase", image: "images/8744961.png" },
        { name: "Top Seller", image: "images/badge-image2.jpg" },
        { name: "5 Star Seller", image: "images/badge-image3.jpg" },
        { name: "Power Buyer", image: "images/badge-image4.jpg" }
    ];

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
                    <p><strong>Seller:</strong> <a href="account.html">John Doe</a></p>
                    <p><strong>Category:</strong> <a href="category-detail.html">${product.category}</a></p>
                    <p><strong>Condition:</strong> ${getRandomCondition()}</p>
                </div>
            </div>
        `;
    }

    function getRandomCondition() {
        return Math.random() < 0.5 ? 'New' : 'Secondhand'; // Randomly assigns condition
    }

    function showSurpriseReward() {
        // Get a random reward message
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];

        // Choose a random achievement
        const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];

        surpriseRewardContainer.innerHTML = `
            <div class="reward-message">
                <h3>Surprise!</h3>
                <p>${randomReward}</p>
                <h4>Achievement Unlocked!</h4>
                <div class="badge">
                    <img src="${randomAchievement.image}" alt="${randomAchievement.name} Badge">
                    <p>${randomAchievement.name}</p>
                </div>
            </div>
        `;

        surpriseRewardContainer.style.display = 'block'; // Show the surprise reward container
    }

    addToCartButton.addEventListener('click', () => {
        // Show animation
        lottieContainer.style.display = 'block';
        animationMessage.textContent = 'Adding to Cart...';

        // Simulate an add-to-cart process
        setTimeout(() => {
            animationMessage.textContent = 'Successfully Added to Cart!';
            setTimeout(() => {
                lottieContainer.style.display = 'none'; // Hide animation after a short delay
                showSurpriseReward(); // Show the surprise reward after the animation
            }, 1000); // Keep success message visible for a moment
        }, 2000); // Simulate 2 seconds of adding to cart animation
    });

    if (productId) {
        fetchProductDetails(productId);
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }
});
