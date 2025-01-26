document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const categoryNameElement = document.getElementById('category-name');

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    async function fetchCategoryProducts(category) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching category products:', error);
        }
    }

    function displayProducts(products) {
        productGrid.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                </a>
            `;
            productGrid.appendChild(productItem);
        });
    }

    if (category) {
        categoryNameElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        fetchCategoryProducts(category);
    } else {
        categoryNameElement.textContent = "Category Not Found";
    }
});
