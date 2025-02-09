// achievements.js
document.addEventListener('DOMContentLoaded', () => {
    const badgeContainer = document.querySelector('.badge-container');

    // Example array of achievements (this could be fetched from the backend)
    const achievements = [
        { name: "First Purchase", image: "images/8744961.png" }, // Corrected path
        { name: "Top Seller", image: "images/8744961.png" },
        { name: "5 Star Seller", image: "images/8744961.png" },
        { name: "Power Buyer", image: "images/8744961.png" }
    ];

    // Function to dynamically add badges to the page
    function displayAchievements() {
        achievements.forEach(achievement => {
            const badgeElement = document.createElement('div');
            badgeElement.classList.add('badge');

            const badgeImage = document.createElement('img');
            badgeImage.src = achievement.image;
            badgeImage.alt = `${achievement.name} Badge`;

            const badgeName = document.createElement('p');
            badgeName.textContent = achievement.name;

            badgeElement.appendChild(badgeImage);
            badgeElement.appendChild(badgeName);
            badgeContainer.appendChild(badgeElement);
        });
    }

    displayAchievements(); // Call the function to display badges
});
