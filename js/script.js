// Home page JavaScript Code Start Here 
/**
 * AIIM Navigation Script
 * Handles mobile hamburger menu toggle and icon switching
 */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the elements
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = menuToggle.querySelector('i');

    // 2. Add click event listener to the hamburger icon
    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the menu
        navMenu.classList.toggle('active');

        // Toggle the icon: Change 'fa-bars' to 'fa-xmark' and vice-versa
        if (navMenu.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // 3. Close the menu when a link is clicked
    // This provides a better UX on mobile devices
    const navLinks = document.querySelectorAll('.navlist_item');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove the active class to hide the menu
            navMenu.classList.remove('active');
            
            // Reset the icon back to the bars
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        });
    });
});
