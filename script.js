<script>
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
</script>
