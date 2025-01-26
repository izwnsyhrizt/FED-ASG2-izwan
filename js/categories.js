document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');

    async function fetchCategories() {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const categories = await response.json();
            displayCategories(categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    function displayCategories(categories) {
        categoryList.innerHTML = '';

        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category-item');
            categoryItem.innerHTML = `
                <a href="category-detail.html?category=${category}">
                    <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                </a>
            `;
            categoryList.appendChild(categoryItem);
        });
    }

    fetchCategories();
});
