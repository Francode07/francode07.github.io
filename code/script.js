
// Wait until the page content is loaded
window.onload = function() {
    // Hide loading screen
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";

        // Animation for profile image and intro text
        const profileImage = document.getElementById('profile-img');
        
        profileImage.style.opacity = 0;
        profileImage.style.transform = 'translateY(20px)';
     

        // Animation for profile image
        setTimeout(function() {
            profileImage.style.transition = 'opacity 1s, transform 1s';
            profileImage.style.opacity = 1;
            profileImage.style.transform = 'translateY(0)';
        }, 200);

        
    }, 2000); // Loading screen will disappear after 2 seconds

    
    

    // Set name in intro section with animation
    const name = "Hi 🖐 I'm Njiraini Francis.";
    const introText = document.getElementById("intro");

    [...name].forEach((letter, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.className = "letter";
            span.textContent = letter;
            introText.appendChild(span);
        }, index * 200); // Delay each letter's appearance
    });


};



// JavaScript to animate profile image 
document.addEventListener('DOMContentLoaded', () => {
    // Animate profile image on hover
    const profileImage = document.querySelector('.profile-image img');
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transform = 'scale(1.1) rotate(5deg)';
        profileImage.style.transition = 'transform 0.3s ease';
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'scale(1) rotate(0)';
    });

    


    // Add confirmation for CV download
    const downloadButton = document.querySelector('.buttons a[download]');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            alert('Your CV download will start shortly!');
        });
    }
});

