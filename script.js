// Mobile menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('navMenu').classList.remove('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});