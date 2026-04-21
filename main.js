document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderInstagram();
  renderNews();
  renderProjects();
  initMobileMenu();
});

// --- Header Logic ---
function initHeader() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
  });
}

// --- Instagram Mockup ---
function renderInstagram() {
  const grid = document.getElementById('insta-grid');
  const items = [
    { type: 'Feira de Ciências', date: 'Abril 2026' },
    { type: 'Prática de Robótica', date: 'Março 2026' },
    { type: 'Gincana Cultural', date: 'Março 2026' },
    { type: 'Aula de Campo', date: 'Fevereiro 2026' },
    { type: 'Encontro de Pais', date: 'Fevereiro 2026' },
    { type: 'Oficina de Teatro', date: 'Janeiro 2026' },
    { type: 'Formatura 2025', date: 'Dezembro 2025' },
    { type: 'Premiação SPAECE', date: 'Novembro 2025' },
    { type: 'Projeto Malupix', date: 'Novembro 2025' },
  ];

  grid.innerHTML = items.map((item, i) => `
    <div class="insta-item">
      <div class="insta-placeholder">
        <span class="insta-type">${item.type}</span>
        <span class="insta-date">${item.date}</span>
      </div>
    </div>
  `).join('');
}

// --- News Portal ---
function renderNews() {
  const grid = document.getElementById('news-grid');
  const news = [
    {
      id: 1,
      category: 'crede',
      title: 'CREDE 02 abre inscrições para Encontro Regional de Gestores',
      date: '20 Abr 2026',
      excerpt: 'Evento discutirá metas pedagógicas para o segundo semestre de 2026...',
      categoryLabel: 'CREDE 02'
    },
    {
      id: 2,
      category: 'seduc',
      title: 'SEDUC-CE anuncia novos recursos para Laboratórios de Informática',
      date: '18 Abr 2026',
      excerpt: 'Estado investe na modernização tecnológica das escolas de tempo integral...',
      categoryLabel: 'SEDUC-CE'
    },
    {
      id: 3,
      category: 'local',
      title: 'Semana de Inovação Maria Luiza: Confira a programação completa',
      date: '15 Abr 2026',
      excerpt: 'Alunos apresentarão projetos desenvolvidos no Sistema Malupix...',
      categoryLabel: 'Eventos Paracuru'
    }
  ];

  grid.innerHTML = news.map(item => `
    <article class="card news-card" data-category="${item.category}">
      <div class="card-content">
        <span class="badge badge-orange">${item.categoryLabel}</span>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-date">${item.date}</p>
        <p class="news-excerpt">${item.excerpt}</p>
        <a href="#" class="btn-text">Ler mais →</a>
      </div>
    </article>
  `).join('');
}

// --- Projects ---
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const projects = [
    {
      title: 'Sistema Malupix',
      description: 'Inovação e engajamento: A moeda social que incentiva o protagonismo estudantil.',
      icon: `<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`
    },
    {
      title: 'Laboratórios de TI',
      description: 'Ambientes modernos para desenvolvimento de software e robótica aplicada.',
      icon: `<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    {
      title: 'Horta Pedagógica',
      description: 'Sustentabilidade e aprendizado prático em contato com a natureza.',
      icon: `<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 10 1.1 1.1c.9.9 1.1 2.3.5 3.3l-1.4 2.3c-.5.8-1.5.8-2.1 0L8.7 14.4c-.6-1 .4-2.4 1.3-3.3L12 10z"/><path d="m12 10 1.1-1.1c.9-.9 2.3-1.1 3.3-.5l2.3 1.4c.8.5.8 1.5 0 2.1l-2.3 1.4c-1 .6-2.4-.4-3.3-1.3L12 10z"/><path d="m12 10-1.1-1.1c-.9-.9-1.1-2.3-.5-3.3l1.4-2.3c.5-.8 1.5-.8 2.1 0l1.4 2.3c.6 1-.4 2.4-1.3 3.3L12 10z"/><path d="m12 10-1.1 1.1c-.9.9-2.3 1.1-3.3.5L5.3 10.2c-.8-.5-.8-1.5 0-2.1l2.3-1.4c1-.6 2.4.4 3.3 1.3L12 10z"/></svg>`
    }
  ];

  grid.innerHTML = projects.map(p => `
    <div class="card project-card">
      <div class="card-content">
        <div class="project-icon">${p.icon}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    </div>
  `).join('');
}
