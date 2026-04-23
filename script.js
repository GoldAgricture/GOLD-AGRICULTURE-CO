// script.js

// Smooth Scrolling
const smoothScrollTo = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

// Form Submission Handling
const handleFormSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Handle form data here (e.g., send it to a server)
    console.log('Form submitted', Object.fromEntries(formData));
};

// Navigation Menu Interactions
const toggleMenu = () => {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
};

// Dynamic Content Features
const dynamicContent = () => {
    const content = document.getElementById('dynamic-content');
    content.textContent = 'Content loaded dynamically!';
};

// Event Listeners
document.querySelector('#scroll-button').addEventListener('click', () => smoothScrollTo('#target-section'));
document.querySelector('#form').addEventListener('submit', handleFormSubmission);
document.querySelector('#menu-toggle').addEventListener('click', toggleMenu);
dynamicContent();