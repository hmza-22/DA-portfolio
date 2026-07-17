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

const projects = [
  {
    id: 1,
    title: 'Global Retail Performance Dashboard',
    subtitle: 'Power BI Project',
    mainImage: 'assets/projects/powerbi-projects.png',
    tags: ['Power BI', 'Excel', 'Data Cleaning'],
    problem: 'Store owners struggle to identify where they are making or losing money across thousands of rows of data.',
    whatIDid: [
      'Cleaned and formatted 50,000+ row Superstore dataset in Excel',
      'Removed duplicates and fixed formatting errors',
      'Built interactive Power BI dashboard tracking Sales, Profit & Quantity over 12 months',
      'Engineered high-contrast KPI cards for instant insight'
    ],
    keyFindings: [
      'USA: $286K+ in profit (top performing market)',
      'Turkey: $98K+ in loss (needs strategy review)',
      'Sales peak in December (holiday surge)',
      'Notable Q1 spike in March (clearance sales)'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/mohammad-hamza-data-science_dataanalytics-powerbi-excel-ugcPost-7461518539921842177-gjed/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADrT-q8Bo5fpkYK1_FKNmEBB_rD-8DOfaAk',
    dataPreparationImage: 'assets/projects/filtered-data.png',
    rawDataImage: 'assets/projects/raw-data-pbi.png'
  },
  {
    id: 2,
    title: 'Daikibo Telemetry & Workplace Equality Analysis',
    subtitle: 'Deloitte Data Analysis Job Simulation — Forage',
    mainImage: 'assets/projects/daikibo-main.png',

    tags: ['Tableau', 'Excel', 'Data Analysis', 'Forage'],
    description: 'Built an interactive Tableau dashboard analyzing factory telemetry data and developed nested Excel formulas to classify gender pay equality scores across factories and job roles.',
    problem: 'Daikibo Industrials needed answers to two critical business problems: identifying which factory location had the highest equipment downtime and which machines broke most often there, and investigating internal complaints about gender pay inequality across all company locations and job roles.',
    tasks: [
      {
        label: 'TASK 1 — TABLEAU DASHBOARD',
        caption: 'Factory Telemetry & Machine Downtime Analysis',
        image: 'assets/projects/daikibo task1.png',
        whatIDid: [
          'Analyzed telemetry data from 4 Daikibo factory locations',
          'Built an interactive Tableau dashboard with calculated fields',
          'Used cross-filtering to isolate downtime by factory and device',
          'Identified the factory with highest equipment downtime'
        ]
      },
      {
        label: 'TASK 2 — EXCEL ANALYSIS',
        caption: 'Gender Pay Equality Classification',
        image: 'assets/projects/daikibo task2.png',
        whatIDid: [
          'Received equality scores calculated by Forensic Tech team',
          'Developed nested logical Excel formulas (IF/AND) to classify scores',
          'Classified each job role into: Fair / Unfair / Highly Discriminative',
          'Analyzed pay equality across all factories and job roles',
          'Helped HR identify which departments needed urgent attention'
        ]
      }
    ],
    keyFindings: [
      'In 3 out of 4 factories, Laser Cutter machines had highest downtime',
      'Daikibo Factory Seiko had the largest number of unhealthy Laser machines',
      'Higher job positions (VP, Director, Sr. Manager) showed highest pay discrimination',
      'Multiple factories flagged as Highly Discriminative at senior levels'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/mohammad-hamza-data-science/details/projects/'
  },
  {
    id: 3,
    title: 'SaaS Customer Churn Analysis',
    subtitle: 'Independent Project — Telco Dataset',
    mainImage: 'assets/projects/SAAS dashboard.png',
    tags: ['Python', 'Power BI', 'Excel', 'Pandas'],
    description: 'Analyzed churn behavior of 7,048 telecom customers using Python and Power BI to uncover retention insights and validate business hypotheses.',
    aim: 'To identify the key drivers of customer churn in a SaaS telecom company and provide actionable retention strategies by analyzing contract types, tenure patterns, and monthly charge behavior across 7,048 customers.',
    hypothesis: [
      'H1: Customers on month-to-month contracts churn more than those on annual contracts',
      'H2: Customers with tenure less than 12 months have a significantly higher churn rate',
      'H3: Customers paying higher monthly charges are more likely to churn'
    ],
    whatIDid: [
      'Collected and cleaned Telco customer dataset (7,048 records) using Excel and Python (Pandas)',
      'Performed Exploratory Data Analysis (EDA) using Python to identify churn patterns',
      'Engineered tenure cohort groups and charge groups for segmented analysis',
      'Built an interactive Power BI dashboard visualizing churn by contract type, tenure cohort, and monthly charges',
      'Validated all 3 business hypotheses against real data'
    ],
    keyFindings: [
      'Overall churn rate: 26.58% across 7,048 customers',
      'H1 CONFIRMED: Month-to-month contracts had 42.7% churn vs only 2.8% for two-year contracts',
      'H2 CONFIRMED: Customers with 0-12 months tenure churned at 47.7% — nearly 5x higher than long-term customers',
      'H3 PARTIALLY CONFIRMED: High charge group (65-95) showed highest churn at 36%, but very high (95+) was slightly lower at 32.3%',
      '799 churned customers paid over $1,000 — highest revenue loss segment',
      'Average tenure of churned customers: ~18 months'
    ],
    githubUrl: 'https://github.com/hmza-22/SaaS-churn-analysis-independent-project',
    linkedinUrl: 'https://www.linkedin.com/in/mohammad-hamza-data-science/details/projects/'
  }
];

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
    },
    {
      image: "assets/projects/deloitte_simulation certificate.png",
      title: "Data Analytics Job Simulation",
      platform: "Deloitte x Forage",
      verifyLink: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68cd29d394597f8587282ea7_1783928913255_completion_certificate.pdf"
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
  const modalImage = document.querySelector('.modal-image');
  const modalTitle = document.getElementById('modalTitle');
  const modalTags = document.querySelector('.modal-tags');
  const modalCopy = document.querySelector('.modal-copy');
  const projectSection = document.querySelector('.projects');
  const projectsCarousel = document.getElementById('projects-carousel');
  const projectsDots = document.getElementById('projects-dots');
  const defaultProjectCard = document.querySelector('.projects .project-card');

  function renderModalContent(project) {
    if (modalTitle) {
      modalTitle.textContent = project.title;
    }

    if (modalImage) {
      modalImage.src = project.mainImage;
      modalImage.alt = project.title;
    }

    if (modalTags) {
      modalTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
    }

    if (!modalCopy) return;

    const hasAimAndHypothesis = Boolean(project.aim && Array.isArray(project.hypothesis) && project.hypothesis.length);

    const taskMarkup = Array.isArray(project.tasks) && project.tasks.length
      ? project.tasks.map((task, index) => `
          <section class="modal-section">
            <p style="margin: 0 0 0.2rem; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2f8478;">${task.label}</p>
            <p style="margin: 0 0 0.75rem; color: #8b9aa7; font-style: italic;">${task.caption}</p>
            <img class="modal-image modal-image--small" src="${task.image}" alt="${task.caption}" style="width: 100%; max-height: 280px; object-fit: contain; background: #0f1720; border-radius: 12px; display: block;" />
            <p class="modal-section-label">What I Did</p>
            <ul class="modal-list">
              ${task.whatIDid.map(item => `<li>${item}</li>`).join('')}
            </ul>
            ${index < project.tasks.length - 1 ? '<div style="height: 1px; background: #2f8478; opacity: 0.45; margin: 1.25rem 0 0;"></div>' : ''}
          </section>
        `).join('')
      : `
          <section class="modal-section">
            <p class="modal-section-label">What I Did</p>
            <ul class="modal-list">
              ${project.whatIDid ? project.whatIDid.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          </section>
        `;

    const extraSections = [];
    if (project.dataPreparationImage) {
      extraSections.push(`
        <section class="modal-section">
          <p class="modal-section-label">Data Preparation</p>
          <p class="modal-caption">Raw dataset cleaned and structured in Microsoft Excel before importing to Power BI</p>
          <img class="modal-image modal-image--small" src="${project.dataPreparationImage}" alt="Data preparation screenshot" />
        </section>
      `);
    }

    if (project.rawDataImage) {
      extraSections.push(`
        <section class="modal-section">
          <p class="modal-section-label">Raw Data Snapshot</p>
          <p class="modal-caption">A glimpse of the original dataset before cleaning.</p>
          <img class="modal-image modal-image--small" src="${project.rawDataImage}" alt="Raw data preview screenshot" />
        </section>
      `);
    }

    if (hasAimAndHypothesis) {
      modalCopy.innerHTML = `
        <div>
          <h2 id="modalTitle">${project.title}</h2>
          <p style="margin: 0.45rem 0 0; color: #9bb0cf; font-style: italic; font-size: 0.95rem; font-family: 'Manrope', sans-serif;">${project.subtitle}</p>
        </div>
        <div class="modal-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <section class="modal-section">
          <p class="modal-section-label">Project Aim</p>
          <p style="margin: 0; color: #c8d0e0; font-family: 'Manrope', sans-serif; line-height: 1.8;">${project.aim}</p>
        </section>
        <section class="modal-section">
          <p class="modal-section-label">Hypothesis</p>
          <div style="display: grid; gap: 10px;">
            ${project.hypothesis.map(item => `<p style="margin: 0; color: #c8d0e0; font-family: 'Manrope', sans-serif; line-height: 1.8;">${item}</p>`).join('')}
          </div>
        </section>
        <section class="modal-section">
          <p class="modal-section-label">What I Did</p>
          <ul class="modal-list">
            ${project.whatIDid.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        <section class="modal-section">
          <p class="modal-section-label">Key Findings</p>
          <ul class="modal-list">
            ${project.keyFindings.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;">
          <a class="btn btn-outline btn-modal" href="${project.githubUrl}" target="_blank" rel="noreferrer">
            View on GitHub <span class="btn-arrow">→</span>
          </a>
          ${project.linkedinUrl ? `<a class="btn btn-outline btn-modal" href="${project.linkedinUrl}" target="_blank" rel="noreferrer">
            View on LinkedIn <span class="btn-arrow">↗</span>
          </a>` : ''}
        </div>
      `;
      return;
    }

    modalCopy.innerHTML = `
      <p class="modal-section-label">Project</p>
      <h2 id="modalTitle">${project.title}</h2>
      <div class="modal-tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
      </div>
      <section class="modal-section">
        <p class="modal-section-label">Problem Statement</p>
        <p>${project.problem}</p>
      </section>
      ${taskMarkup}
      <section class="modal-section">
        <p class="modal-section-label">Key Findings</p>
        <ul class="modal-list">
          ${project.keyFindings.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </section>
      ${project.linkedinUrl ? `<a class="btn btn-outline btn-modal" href="${project.linkedinUrl}" target="_blank" rel="noreferrer">
        View on LinkedIn <span class="btn-arrow">↗</span>
      </a>` : ''}
      ${extraSections.join('')}
    `;
  }

  function openModal(project = projects[0]) {
    if (!modalOverlay) return;
    renderModalContent(project);
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

  if (defaultProjectCard) {
    defaultProjectCard.setAttribute('data-project-id', projects[0].id);
    defaultProjectCard.addEventListener('click', event => {
      if (event.target.closest('a')) return;
      openModal(projects[0]);
    });
  }

  function renderProjectDots() {
    if (!projectsCarousel || !projectsDots) return;

    const cards = Array.from(projectsCarousel.querySelectorAll('.project-card'));
    projectsDots.innerHTML = cards.map((_, index) => `
      <button class="project-dot" type="button" aria-label="Go to project ${index + 1}" data-index="${index}"></button>
    `).join('');

    const dots = projectsDots.querySelectorAll('.project-dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        cards[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });

    const updateActiveDot = () => {
      const carouselLeft = projectsCarousel.scrollLeft;
      const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
      const activeIndex = Math.round(carouselLeft / Math.max(cardWidth + 16, 1));
      dots.forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
    };

    projectsCarousel.addEventListener('scroll', updateActiveDot, { passive: true });
    window.addEventListener('resize', updateActiveDot);
    updateActiveDot();
  }

  if (projectSection && projectsCarousel) {
    projects.slice(1).forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('data-project-id', project.id);
      card.innerHTML = `
        <div class="project-image">
          <img src="${project.mainImage}" alt="${project.title}" />
        </div>
        <div class="project-details">
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <h3>${project.title}</h3>
          <p>${project.description || project.subtitle}</p>
          <button class="btn btn-outline project-open" type="button">
            View Project <span class="btn-arrow">→</span>
          </button>
        </div>
      `;
      card.addEventListener('click', event => {
        if (event.target.closest('a')) return;
        openModal(project);
      });
      card.querySelector('.project-open').addEventListener('click', () => openModal(project));
      projectsCarousel.appendChild(card);
      card.classList.add('visible');
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      observer.observe(card);
    });

    renderProjectDots();
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

  renderModalContent(projects[0]);

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
