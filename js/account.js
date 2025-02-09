document.addEventListener("DOMContentLoaded", function() {
    const userId = 1; // Placeholder for user ID
    const userName = "John Doe"; // Sample username
    const followersCount = 120; // Sample follower count

    // Fetch user data and display it
    document.getElementById("username").innerText = userName;
    document.getElementById("followers-count").innerText = `Followers: ${followersCount}`;

    // Toggle follow button
    const followBtn = document.getElementById("follow-btn");
    followBtn.addEventListener("click", function() {
        alert(followBtn.innerText === "Follow" ? "You are now following this user!" : "You have unfollowed this user.");
        followBtn.innerText = followBtn.innerText === "Follow" ? "Unfollow" : "Follow";
    });

    // Fetch user listings (using FakeStore API)
    fetch(`https://fakestoreapi.com/products?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            const listingsContainer = document.getElementById("listings-container");
            data.forEach(product => {
                const productItem = document.createElement("div");
                productItem.classList.add("listing-item");
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" style="width: 100px;">
                    <h4>${product.title}</h4>
                    <p>$${product.price}</p>
                `;
                listingsContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching listings:', error));
});
