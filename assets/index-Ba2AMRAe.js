(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{e(),n(),r(),i(),t()});function e(){let e=document.getElementById(`main-header`);window.addEventListener(`scroll`,()=>{window.scrollY>50?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)})}function t(){let e=document.querySelector(`.mobile-menu-toggle`),t=document.getElementById(`main-nav`);e.addEventListener(`click`,()=>{t.classList.toggle(`active`),e.classList.toggle(`active`)})}function n(){let e=document.getElementById(`insta-grid`);e.innerHTML=[{type:`Feira de Ciências`,date:`Abril 2026`},{type:`Prática de Robótica`,date:`Março 2026`},{type:`Gincana Cultural`,date:`Março 2026`},{type:`Aula de Campo`,date:`Fevereiro 2026`},{type:`Encontro de Pais`,date:`Fevereiro 2026`},{type:`Oficina de Teatro`,date:`Janeiro 2026`},{type:`Formatura 2025`,date:`Dezembro 2025`},{type:`Premiação SPAECE`,date:`Novembro 2025`},{type:`Projeto Malupix`,date:`Novembro 2025`}].map((e,t)=>`
    <div class="insta-item">
      <div class="insta-placeholder">
        <span class="insta-type">${e.type}</span>
        <span class="insta-date">${e.date}</span>
      </div>
    </div>
  `).join(``)}function r(){let e=document.getElementById(`news-grid`);e.innerHTML=[{id:1,category:`crede`,title:`CREDE 02 abre inscrições para Encontro Regional de Gestores`,date:`20 Abr 2026`,excerpt:`Evento discutirá metas pedagógicas para o segundo semestre de 2026...`,categoryLabel:`CREDE 02`},{id:2,category:`seduc`,title:`SEDUC-CE anuncia novos recursos para Laboratórios de Informática`,date:`18 Abr 2026`,excerpt:`Estado investe na modernização tecnológica das escolas de tempo integral...`,categoryLabel:`SEDUC-CE`},{id:3,category:`local`,title:`Semana de Inovação Maria Luiza: Confira a programação completa`,date:`15 Abr 2026`,excerpt:`Alunos apresentarão projetos desenvolvidos no Sistema Malupix...`,categoryLabel:`Eventos Paracuru`}].map(e=>`
    <article class="card news-card" data-category="${e.category}">
      <div class="card-content">
        <span class="badge badge-orange">${e.categoryLabel}</span>
        <h3 class="news-title">${e.title}</h3>
        <p class="news-date">${e.date}</p>
        <p class="news-excerpt">${e.excerpt}</p>
        <a href="#" class="btn-text">Ler mais →</a>
      </div>
    </article>
  `).join(``)}function i(){let e=document.getElementById(`projects-grid`);e.innerHTML=[{title:`Sistema Malupix`,description:`Inovação e engajamento: A moeda social que incentiva o protagonismo estudantil.`,icon:`<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`},{title:`Laboratórios de TI`,description:`Ambientes modernos para desenvolvimento de software e robótica aplicada.`,icon:`<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`},{title:`Horta Pedagógica`,description:`Sustentabilidade e aprendizado prático em contato com a natureza.`,icon:`<svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-secondary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 10 1.1 1.1c.9.9 1.1 2.3.5 3.3l-1.4 2.3c-.5.8-1.5.8-2.1 0L8.7 14.4c-.6-1 .4-2.4 1.3-3.3L12 10z"/><path d="m12 10 1.1-1.1c.9-.9 2.3-1.1 3.3-.5l2.3 1.4c.8.5.8 1.5 0 2.1l-2.3 1.4c-1 .6-2.4-.4-3.3-1.3L12 10z"/><path d="m12 10-1.1-1.1c-.9-.9-1.1-2.3-.5-3.3l1.4-2.3c.5-.8 1.5-.8 2.1 0l1.4 2.3c.6 1-.4 2.4-1.3 3.3L12 10z"/><path d="m12 10-1.1 1.1c-.9.9-2.3 1.1-3.3.5L5.3 10.2c-.8-.5-.8-1.5 0-2.1l2.3-1.4c1-.6 2.4.4 3.3 1.3L12 10z"/></svg>`}].map(e=>`
    <div class="card project-card">
      <div class="card-content">
        <div class="project-icon">${e.icon}</div>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
    </div>
  `).join(``)}