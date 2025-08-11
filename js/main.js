// Animate on Scroll
AOS.init({
  duration: 1000,
  once: true,
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-transparent');
  } else {
    navbar.classList.remove('bg-transparent');
  }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Hide mobile menu if open (if applicable)
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
      }
    }
  });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
let started = false;

function startCountUp() {
  counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;
    let increment = target / 100;

    let updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };
    updateCount();
  });
}

// Trigger when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      startCountUp();
      started = true;
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('opacity-100', 'max-h-[500px]');
    mobileMenu.classList.remove('opacity-0', 'max-h-0');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('opacity-100', 'max-h-[500px]');
    mobileMenu.classList.add('opacity-0', 'max-h-0');
  });

  // Tutup menu saat klik link di mobile
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('opacity-100', 'max-h-[500px]');
      mobileMenu.classList.add('opacity-0', 'max-h-0');
    });
  });

  // Splide Initialization for Testimonial Carousel
document.addEventListener('DOMContentLoaded', () => {
  new Splide('#testimonialSplide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1.5rem',
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    breakpoints: {
      1024: {
        perPage: 2,
        gap: '1rem',
      },
      640: {
        perPage: 1,
        gap: '0.75rem',
      },
    },
  }).mount();
});