(() => {
  const params = new URLSearchParams(location.search);
  const id = params.get('project') || 'feiyan';
  const p = (window.LDG_PROJECTS || {})[id] || window.LDG_PROJECTS.feiyan;
  const hero = document.querySelector('#projectHeroImage');
  const title = document.querySelector('#projectTitle');
  const category = document.querySelector('#projectCategory');
  const locationEl = document.querySelector('#projectLocation');
  const summary = document.querySelector('#projectSummary');
  if (hero) { hero.src = p.image; hero.alt = p.title; }
  if (title) title.textContent = p.title;
  if (category) category.textContent = p.category;
  if (locationEl) locationEl.textContent = p.location || '';
  if (summary) summary.textContent = p.summary || '';

  const dataWrap = document.querySelector('#projectData');
  if (dataWrap) dataWrap.innerHTML = p.data.map(([k,v]) => `<div class="data-item"><small>${k}</small><strong>${v}</strong></div>`).join('');
  const awardWrap = document.querySelector('#projectAwards');
  const awardSection = document.querySelector('#awardSection');
  if (awardWrap) awardWrap.innerHTML = p.awards.map(a => `<li>${a}</li>`).join('');
  if (awardSection && !p.awards.length) awardSection.style.display = 'none';
})();
