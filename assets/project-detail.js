(() => {
  const params = new URLSearchParams(location.search);
  const key = params.get('project') || 'feiyan';
  const p = window.LDG_PROJECTS?.[key] || window.LDG_PROJECTS.feiyan;
  const byId = id => document.getElementById(id);

  document.title = `${p.title}｜LDG 立人建筑`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', `${p.title}，${p.location}。LDG 立人建筑项目。`);

  byId('projectHeroImage').src = p.image;
  byId('projectHeroImage').alt = p.title;
  byId('projectTitle').textContent = p.title;
  byId('projectCategory').textContent = p.category;
  byId('projectLocation').textContent = p.location;
  byId('projectSummary').textContent = p.summary;

  const data = byId('projectData');
  data.innerHTML = '';
  (p.data || []).forEach(([k,v]) => {
    const row = document.createElement('div'); row.className='data-row';
    row.innerHTML = `<span>${k}</span><span>${v}</span>`; data.appendChild(row);
  });

  const awardSection = byId('awardSection');
  const awards = byId('projectAwards');
  awards.innerHTML='';
  if (!p.awards?.length) awardSection.hidden = true;
  else p.awards.forEach(v => { const li=document.createElement('li'); li.textContent=v; awards.appendChild(li); });

  const gallerySection = byId('gallerySection');
  const gallery = byId('projectGallery');
  gallery.innerHTML='';
  if (!p.gallery?.length) gallerySection.hidden = true;
  else p.gallery.forEach((src,i) => { const img=document.createElement('img'); img.src=src; img.alt=`${p.title} 项目图片 ${i+2}`; img.loading='lazy'; gallery.appendChild(img); });
})();
