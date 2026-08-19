(() => {
  const lang=document.documentElement.dataset.lang||'zh';
  const prefix=document.documentElement.dataset.assetPrefix||'';
  const projects=window.LDG_PROJECTS_I18N?.[lang]||window.LDG_PROJECTS_I18N?.zh||{};
  const params=new URLSearchParams(location.search); const keys=Object.keys(projects); const requested=params.get('project')||'feiyan'; const key=projects[requested]?requested:'feiyan'; const project=projects[key];
  const byId=id=>document.getElementById(id); const asset=src=>prefix+src;
  document.title=`${project.title} | LDG · Lyric Design Group`;
  const meta=document.querySelector('meta[name="description"]'); if(meta)meta.content=project.summary;
  const ogTitle=document.querySelector('meta[property="og:title"]'); if(ogTitle)ogTitle.content=`${project.title} | LDG`;
  const ogDescription=document.querySelector('meta[property="og:description"]'); if(ogDescription)ogDescription.content=project.summary;
  const hero=byId('projectHeroImage'); hero.src=asset(project.image); hero.alt=project.title;
  byId('projectTitle').textContent=project.title; byId('projectCategory').textContent=project.category; byId('projectLocation').textContent=project.location; byId('projectSummary').textContent=project.summary;
  const currentIndex=Math.max(0,keys.indexOf(key)); const indexLabel=byId('projectIndex'); if(indexLabel)indexLabel.textContent=`${String(currentIndex+1).padStart(2,'0')} / ${String(keys.length).padStart(2,'0')}`;
  const data=byId('projectData'); data.innerHTML=''; (project.data||[]).forEach(([label,value])=>{const row=document.createElement('div');row.className='data-row';const k=document.createElement('span'),v=document.createElement('span');k.textContent=label;v.textContent=value;row.append(k,v);data.appendChild(row)});
  const awardSection=byId('awardSection'),awards=byId('projectAwards'); awards.innerHTML=''; if(!project.awards?.length)awardSection.hidden=true;else project.awards.forEach(value=>{const li=document.createElement('li');li.textContent=value;awards.appendChild(li)});
  const gallerySection=byId('gallerySection'),gallery=byId('projectGallery'); gallery.innerHTML=''; const sources=project.gallery||[]; if(!sources.length)gallerySection.hidden=true;else sources.forEach((src,index)=>{const img=document.createElement('img');img.src=asset(src);img.alt=`${project.title} — ${index+2}`;img.loading='lazy';img.decoding='async';img.addEventListener('error',()=>{img.remove();requestAnimationFrame(()=>{if(!gallery.children.length)gallerySection.hidden=true})});gallery.appendChild(img)});
  const prevKey=keys[(currentIndex-1+keys.length)%keys.length],nextKey=keys[(currentIndex+1)%keys.length]; const prev=projects[prevKey],next=projects[nextKey]; const prevLink=byId('prevProject'),nextLink=byId('nextProject');
  if(prevLink){prevLink.href=`project.html?project=${encodeURIComponent(prevKey)}`;prevLink.querySelector('strong').textContent=prev.title} if(nextLink){nextLink.href=`project.html?project=${encodeURIComponent(nextKey)}`;nextLink.querySelector('strong').textContent=next.title}
})();
