// Navigation dots active state
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded successfully!');
    
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-dot-item');
    
    // Update active state on scroll
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav items
                navItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to current nav item
                const activeNavItem = document.querySelector(`.nav-dot-item[data-section="${sectionId}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => observer.observe(section));
});
