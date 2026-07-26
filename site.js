
(function () {
  'use strict';

  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const items = document.querySelectorAll('[data-reveal]');
    items.forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 4 === 1) el.classList.add('reveal-delay-1');
      if (i % 4 === 2) el.classList.add('reveal-delay-2');
      if (i % 4 === 3) el.classList.add('reveal-delay-3');
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -6% 0px' });

    items.forEach(el => observer.observe(el));
  }
})();


/* V8: scroll-spy navigation indicator */
(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  if (!nav) return;

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const isHome =
    currentPath === '/' ||
    currentPath.endsWith('/index.html') ||
    currentPath === '/index.html';

  const navLinks = Array.from(nav.querySelectorAll('a'));

  function moveIndicatorTo(link) {
    navLinks.forEach(a => a.classList.remove('nav-active'));

    if (!link || window.innerWidth <= 880) {
      nav.style.setProperty('--indicator-opacity', '0');
      return;
    }

    link.classList.add('nav-active');

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const inset = Math.min(10, linkRect.width * 0.12);

    nav.style.setProperty('--indicator-left', `${linkRect.left - navRect.left + inset}px`);
    nav.style.setProperty('--indicator-width', `${Math.max(18, linkRect.width - inset * 2)}px`);
    nav.style.setProperty('--indicator-opacity', '1');
  }

  function setStaticPageIndicator() {
    const file = currentPath.split('/').pop() || 'index.html';
    const match = navLinks.find(link => {
      const href = (link.getAttribute('href') || '').split('#')[0];
      return href === file;
    });
    moveIndicatorTo(match || null);
  }

  if (!isHome) {
    setStaticPageIndicator();
    window.addEventListener('resize', setStaticPageIndicator, { passive: true });
    return;
  }

  const sectionLinks = navLinks
    .filter(link => link.dataset.scrollSection)
    .map(link => ({
      link,
      section: document.getElementById(link.dataset.scrollSection)
    }))
    .filter(item => item.section);

  if (!sectionLinks.length) return;

  function updateFromScroll() {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 0;
    const marker = window.scrollY + headerHeight + Math.min(180, window.innerHeight * 0.28);

    let active = null;

    for (const item of sectionLinks) {
      if (item.section.offsetTop <= marker) {
        active = item.link;
      }
    }

    /* Keep the bar hidden while the visitor is still in the hero/price strip. */
    moveIndicatorTo(active);
  }

  let ticking = false;
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateFromScroll();
      ticking = false;
    });
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });

  sectionLinks.forEach(({ link }) => {
    link.addEventListener('click', () => {
      /* Gives immediate visual feedback while smooth scrolling catches up. */
      moveIndicatorTo(link);
    });
  });

  updateFromScroll();
})();
