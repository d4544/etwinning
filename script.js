// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Share functions
    window.shareProject = function(platform) {
        const text = encodeURIComponent("The Power of S.H.E. – Strength, Hope & Equality eTwinning project! Empowering students through cinema & women's rights. Check it out: ");
        const url = encodeURIComponent(window.location.href);
        
        let shareUrl = '';
        
        if (platform === 'twitter') {
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        } else if (platform === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (platform === 'linkedin') {
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        } else if (platform === 'whatsapp') {
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
        
        // Little feedback
        const btns = document.querySelectorAll('.share-btn');
        btns.forEach(btn => {
            if (btn.textContent.includes(platform)) {
                const original = btn.innerHTML;
                btn.innerHTML = '✅ Shared!';
                setTimeout(() => { btn.innerHTML = original; }, 2000);
            }
        });
    };
    
    // Copy link button
    window.copyLink = function() {
        const linkInput = document.getElementById('project-link');
        linkInput.select();
        document.execCommand('copy');
        
        // Feedback
        const originalText = linkInput.value;
        linkInput.value = '✅ Copied!';
        setTimeout(() => {
            linkInput.value = originalText;
        }, 1800);
    };
    
    console.log('%c✅ The Power of S.H.E. website loaded successfully!', 'color:#00a8e0; font-size:14px;');
});
