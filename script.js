 // Mobile Navigation Toggle
        const navMobileToggle = document.querySelector('.nav-mobile-toggle');
        const mainNav = document.querySelector('.main-nav');

        navMobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navMobileToggle.querySelector('i').classList.toggle('ri-menu-line');
            navMobileToggle.querySelector('i').classList.toggle('ri-close-line');
        });

        // Category Filter Interaction
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
        // Previous mobile navigation script remains the same
        const navMobileToggle = document.querySelector('.nav-mobile-toggle');
        const mainNav = document.querySelector('.main-nav');

        navMobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navMobileToggle.querySelector('i').classList.toggle('ri-menu-line');
            navMobileToggle.querySelector('i').classList.toggle('ri-close-line');
        });

        // Category Filter Interaction
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
