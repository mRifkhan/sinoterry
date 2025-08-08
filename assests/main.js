const navLinks = document.querySelectorAll('.navbar-nav a');
const sections = document.querySelectorAll('section[id]');

// Highlight on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.navbar-nav a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, {
  threshold: 0.4,
});

sections.forEach(section => observer.observe(section));

// Highlight on click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId.startsWith('#')) {
        e.preventDefault();

        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();

        setTimeout(() => {
          const target = document.querySelector(targetId);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 90, // offset for sticky navbar
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    });
  });
});
