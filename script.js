const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (!targetId.startsWith('#') || targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Certificates data and rendering
  const certificates = [
    {
      image: "assets/projects/ai-skills-fest-2026.png",
      title: "AI Skills Fest 2026",
      platform: "Credly",
      verifyLink: "https://www.credly.com/badges/531efb06-7593-4b9c-a588-e103d687f86c"
    },
    {
      image: "assets/projects/Screenshot 2026-06-18 121126.png",
      title: "Certificate (CertX)",
      platform: "CertX",
      verifyLink: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997485849"
    },
    {
      image: "assets/projects/ai-skills-passport.png",
      title: "EY AI Skills Passport",
      platform: "EY (Ernst & Young)",
      verifyLink: "https://www.credly.com/badges/8448fd7c-c9dd-40f8-9dda-edebfd9449b4/linked_in_profile"
    }
    // easy to add more objects here later
  ];

  function renderCertificates() {
    const grid = document.getElementById('certifications-grid');
    if (!grid) return;
    certificates.forEach(cert => {
      const card = document.createElement(cert.verifyLink ? 'a' : 'div');
      if (cert.verifyLink) {
        card.setAttribute('href', cert.verifyLink);
        card.setAttribute('target', '_blank');
        card.setAttribute('rel', 'noreferrer noopener');
      }
      card.className = 'cert-card fade-up';
      card.innerHTML = `
        <div class="cert-image-wrap">
          <img src="${cert.image}" alt="${cert.title}" />
        </div>
        <div class="cert-body">
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-platform">${cert.platform}</p>
        </div>
        ${cert.verifyLink ? '<span class="cert-verify">Verify ✓</span>' : ''}
      `;
      grid.appendChild(card);
      observer.observe(card);
    });
  }

  renderCertificates();

  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const projectCard = document.querySelector('.project-card');

  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (projectCard) {
    projectCard.addEventListener('click', event => {
      if (event.target.closest('a')) return;
      openModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', event => {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

// Roadmap animation
   const heroChart = document.getElementById('heroChart');
   if (heroChart) {
     const path = heroChart.querySelector('.roadmap-path');
     const nodes = Array.from(heroChart.querySelectorAll('.roadmap-node'));
     let animationInProgress = false;

     function resetRoadmap() {
       if (!path) return;
       const length = path.getTotalLength();
       path.style.strokeDasharray = length;
       path.style.strokeDashoffset = length;
       nodes.forEach(node => {
         node.classList.remove('active');
       });
       animationInProgress = false;
     }

     function playRoadmap() {
       if (!path || animationInProgress) return;
       animationInProgress = true;
       const length = path.getTotalLength();
       path.style.strokeDasharray = length;
       path.style.strokeDashoffset = length;
       requestAnimationFrame(() => {
         path.style.transition = 'stroke-dashoffset 1.5s ease';
         path.style.strokeDashoffset = '0';
       });
       nodes.forEach((node, index) => {
         setTimeout(() => {
           node.classList.add('active');
         }, 1500 + index * 200);
       });
     }

     const roadmapObserver = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           playRoadmap();
         } else {
           resetRoadmap();
         }
       });
     }, { threshold: 0.35 });

     roadmapObserver.observe(heroChart);
  }
});
