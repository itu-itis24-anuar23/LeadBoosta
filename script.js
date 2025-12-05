document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. SCROLL ANIMATIONS (FADE UP) ---
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the 'fade-up' class
    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- 3. TESTIMONIAL CAROUSEL NAVIGATION LOGIC ---
    const wrapper = document.getElementById('testimonial-cards-wrapper');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');

    if (wrapper && prevButton && nextButton) {
        // Calculate the width of one card (plus its margin/gap)
        const cardWidth = wrapper.querySelector('.testimonial-card').offsetWidth;
        const gap = 20; // Matches the CSS gap value (must be consistent)
        const scrollDistance = cardWidth + gap;

        nextButton.addEventListener('click', () => {
            wrapper.scrollLeft += scrollDistance;
            // Loop back to start if at the end
            if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 5) {
                wrapper.scrollLeft = 0;
            }
        });

        prevButton.addEventListener('click', () => {
            wrapper.scrollLeft -= scrollDistance;
            // Loop to the end if at the start
            if (wrapper.scrollLeft <= 0) {
                wrapper.scrollLeft = wrapper.scrollWidth;
            }
        });
    }


    // --- 4. CALENDAR MOCKUP INTERACTIVITY ---
    // (Removed as the live Calendly embed replaces this, but kept for full historical code)
    const dates = document.querySelectorAll('.grid-dates span');
    
    dates.forEach(date => {
        date.addEventListener('click', function() {
            dates.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- 5. VIDEO PLACEHOLDER CLICK ---
    const playBtn = document.querySelector('.play-button');
    if(playBtn) {
        playBtn.addEventListener('click', () => {
            alert("In the live version, this would launch your VSL video!");
        });
    }

});