let clickCount = 0;

function buttonClicked(url) {
    clickCount++;

    if (clickCount >= 2) {
        showPopup(); // Show the pop-up ad after 2 clicks
    } else {
        setTimeout(function () {
            window.location.href = url; // Navigate to the URL after the popup is closed
        }, 5000); // Small delay to simulate interaction before redirect
    }
}

function showPopup() {
    document.getElementById('popup').style.display = 'block'; // Display the popup ad
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
    clickCount = 0; // Reset the click count after closing the popup
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show'); // Toggle the visibility of the mobile menu
}

function showDetails(section) {
    const detailsSection = document.getElementById('details');
    
    if (section === 'home') {
        detailsSection.innerHTML = '<h2>Home</h2><p>Welcome to our All Downloader </p>';
    } else if (section === 'about') {
        detailsSection.innerHTML = '<h2>About</h2><p>This is A Dummy Website Use Another WebView </p>';
    } else if (section === 'services') {
        detailsSection.innerHTML = '<h2>Services</h2><p>Download YouTube  Facebook Tiktok Pinterest Video IN 4K </p>';
    } else if (section === 'contact') {
        detailsSection.innerHTML = '<h2>Contact</h2><p>You can contact us via email : raihan48764@gmail.com </p>';
    }
}
