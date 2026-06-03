// script.js

// Smooth Scrolling
const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Form Submission Handling
const handleFormSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    event.target.reset();
};

// Navigation Menu Interactions
const toggleMenu = () => {
    const menu = document.querySelector('#nav-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
};

// Close menu when link is clicked
const closeMenuOnClick = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('#nav-menu');
            if (menu) {
                menu.classList.remove('active');
            }
        });
    });
};

// Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    // Menu toggle button
    const menuToggle = document.querySelector('#menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Scroll button
    const scrollButton = document.querySelector('#scroll-button');
    if (scrollButton) {
        scrollButton.addEventListener('click', (e) => {
            const target = scrollButton.getAttribute('data-target');
            smoothScrollTo(target);
        });
    }
    
    // Form submission
    const form = document.querySelector('#form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Close menu on link click
    closeMenuOnClick();
});