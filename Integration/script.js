window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    if (scrollPosition >= viewportHeight) {
        navbar.style.position = 'fixed';
        navbar.style.bottom = 'auto';
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'absolute';
        navbar.style.bottom = '0';
        navbar.style.top = 'auto';
    }
});
