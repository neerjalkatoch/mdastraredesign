(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const contactPage = '../contact_us/code.html';
  const appointmentPage = '../book_an_appointment/code.html';

  // Attach reveal behavior to major sections for smoother storytelling.
  const revealTargets = document.querySelectorAll('section, header, main > div, .card, .grid > div');
  revealTargets.forEach((el) => {
    if (!el.hasAttribute('data-reveal')) {
      el.setAttribute('data-reveal', '');
    }
  });

  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
  }

  // Mark main visual areas for subtle glow + float effects.
  const heroCandidates = document.querySelectorAll('section img, header img, .hero img');
  heroCandidates.forEach((img, idx) => {
    if (idx === 0) {
      img.classList.add('hero-glow');
    }
    if (idx < 3) {
      img.classList.add('float-soft');
    }
  });

  // Enable click/touch behavior for dropdown buttons that were hover-only.
  const dropdownButtons = document.querySelectorAll('.group > button');
  dropdownButtons.forEach((btn) => {
    const menu = btn.nextElementSibling;
    if (!menu) {
      return;
    }

    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-expanded', 'false');

    const closeMenu = () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.add('opacity-0', 'invisible');
      menu.classList.remove('opacity-100', 'visible');
    };

    const openMenu = () => {
      btn.setAttribute('aria-expanded', 'true');
      menu.classList.remove('opacity-0', 'invisible');
      menu.classList.add('opacity-100', 'visible');
    };

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (!btn.closest('.group').contains(event.target)) {
        closeMenu();
      }
    });
  });

  // Ensure passive CTA buttons have meaningful behavior.
  const routeFromLabel = (label) => {
    const text = label.toLowerCase();
    if (text.includes('book') || text.includes('appointment')) {
      return appointmentPage;
    }
    if (text.includes('service') || text.includes('method') || text.includes('case')) {
      return '../services_luminous/code.html';
    }
    return contactPage;
  };

  const ctaButtons = document.querySelectorAll('button:not([type="submit"])');
  ctaButtons.forEach((btn) => {
    const inForm = !!btn.closest('form');
    const hasOnClick = btn.hasAttribute('onclick');
    const isDropdownControl = btn.parentElement && btn.parentElement.classList.contains('group');

    if (inForm || hasOnClick || isDropdownControl) {
      return;
    }

    btn.setAttribute('type', 'button');
    btn.classList.add('cursor-pointer');
    btn.addEventListener('click', () => {
      window.location.href = routeFromLabel(btn.textContent || '');
    });
  });
})();
