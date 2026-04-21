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
  `).join(``)}function i(){let e=document.getElementById(`projects-grid`);e.innerHTML=[{title:`Sistema Malupix`,description:`Inovação e engajamento: A moeda social que incentiva o protagonismo estudantil.`,icon:`💎`},{title:`Laboratórios de TI`,description:`Ambientes modernos para desenvolvimento de software e robótica aplicada.`,icon:`💻`},{title:`Horta Pedagógica`,description:`Sustentabilidade e aprendizado prático em contato com a natureza.`,icon:`🌿`}].map(e=>`
    <div class="card project-card">
      <div class="card-content">
        <div class="project-icon">${e.icon}</div>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
    </div>
  `).join(``)}