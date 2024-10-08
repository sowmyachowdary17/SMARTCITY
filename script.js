// Function to fetch and display images based on selected place
document.addEventListener('DOMContentLoaded', () => {
    const placeButtons = document.querySelectorAll('.place-btn');
    const placeImagesContainer = document.getElementById('placeImages');

    placeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const place = e.target.getAttribute('data-place');
            displayImages(place);
        });
    });

    // Function to simulate image fetching based on place
    function displayImages(place) {
        // Clear previous images
        placeImagesContainer.innerHTML = '';

        // Here you can replace with actual image URLs
        const images = {
            hyderabad: ['place1.jpeg', 'place2.jpeg'],
            chennai: ['chennai1.jpg', 'chennai2.png'],
            nellore: ['nellore1.jpg', 'nellore2.jpg'],
            bangalore: ['banglore1.jpeg', 'banglore2.jpg'],
            delhi: ['delhi1.jpg', 'delhi2.jpg']
        };

        // Display the images for the selected place
        if (images[place]) {
            images[place].forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc; // You can replace this with the actual path
                img.classList.add('place-img');
                const caption = document.createElement('p');
                caption.innerText = place.charAt(0).toUpperCase() + place.slice(1); // Capitalize the first letter of place
                placeImagesContainer.appendChild(img);
                placeImagesContainer.appendChild(caption);
            });
        } else {
            placeImagesContainer.innerHTML = '<p>No images available for this place.</p>';
        }
    }

    // Login functionality
    document.getElementById('login-btn').addEventListener('click', function() {
        // Simulate a login check (you can replace this with real authentication logic)
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        if (username === 'admin' && password === 'password123') {
            // Redirect to the admin dashboard page
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    });

    // Add event listeners for the signup button
    document.getElementById('signup-btn').addEventListener('click', function() {
        // Perform sign-up logic (e.g., storing user data)
        alert('Sign-up successful! Please log in.');
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });
});
