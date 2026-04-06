// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c✅ The Power of S.H.E. website loaded successfully!', 'color:#7c3aed; font-size:16px; font-weight:bold');

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Change icon
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fake interest form submission
    const form = document.getElementById('interest-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            
            // Simple success animation
            const btn = this.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.style.transition = 'all 0.3s';
            btn.innerHTML = '✅ Sent! Thank you!';
            btn.style.background = '#10b981';
            
            console.log(`Interest received from: ${name}`);
            
            setTimeout(() => {
                alert(`🎉 Thank you, ${name.split(' ')[0]}! Your interest has been noted.\n\nYou will be contacted through the eTwinning platform once you join the project.`);
                form.reset();
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 1800);
        });
    }

    // Console message for teachers/students
    console.log('%c👋 Hello teacher or student! This is a clean, ready-to-use one-page promotional website for your eTwinning project. Just copy the three files and host them anywhere (GitHub Pages, Netlify, school server...). Feel free to customize colors, text or add real project images!', 'color:#ec4899; font-weight:600');
});
