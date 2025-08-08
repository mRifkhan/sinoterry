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
