// Minimal JS: smooth scroll and simple reveal on scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// reveal on scroll
const reveal = (entries, obs) => {
  entries.forEach(entry=>{
    if(entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(reveal, {threshold:0.12});
document.querySelectorAll('.section, .project-card, .hero-inner').forEach(el=>observer.observe(el));
