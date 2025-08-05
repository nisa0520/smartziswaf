// Animate on Scroll
AOS.init({
  duration: 800,
  once: true,
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-white', 'rounded-full', 'shadow-lg');
    navbar.classList.add('bg-transparent');
  } else {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-white', 'rounded-full', 'shadow-lg');
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