(() => {
  document.documentElement.classList.add('js');
  const header=document.querySelector('.site-header');
  const nav=document.querySelector('.nav');
  const menuButton=document.querySelector('.menu-btn');
  const immersiveHero=document.querySelector('.hero, .detail-hero');
  let lastY=window.scrollY;
  const closeMenu=()=>{
    if(!header||!nav||!menuButton)return;
    nav.classList.remove('open'); header.classList.remove('menu-active'); document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded','false'); menuButton.textContent=menuButton.dataset.menuOpen||'Menu';
  };
  const syncHeader=()=>{
    if(!header)return; const y=window.scrollY;
    if(immersiveHero&&!header.classList.contains('light')){const threshold=Math.max(120,window.innerHeight*.64);header.classList.toggle('scrolled',y>threshold)}
    if(y>lastY&&y>240&&!header.classList.contains('menu-active'))header.classList.add('hidden');else header.classList.remove('hidden');
    lastY=y;
  };
  addEventListener('scroll',syncHeader,{passive:true}); syncHeader();
  if(header&&nav&&menuButton){menuButton.addEventListener('click',()=>{const open=!nav.classList.contains('open');if(!open)return closeMenu();nav.classList.add('open');header.classList.add('menu-active');document.body.classList.add('menu-open');menuButton.setAttribute('aria-expanded','true');menuButton.textContent=menuButton.dataset.menuClose||'Close'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const revealItems=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('in');observer.unobserve(entry.target)})},{threshold:.06,rootMargin:'0px 0px -35px 0px'});revealItems.forEach(el=>observer.observe(el))}else revealItems.forEach(el=>el.classList.add('in'));
  document.addEventListener('error',event=>{const img=event.target;if(!(img instanceof HTMLImageElement))return;img.classList.add('broken-image');const media=img.closest('.project-media');if(media)media.setAttribute('aria-label',img.alt||'Project image')},true);
  const filters=[...document.querySelectorAll('.filter-btn')],tiles=[...document.querySelectorAll('.project-tile')],count=document.querySelector('[data-project-count]');
  const applyFilter=value=>{let visible=0;tiles.forEach(tile=>{const hidden=value!=='all'&&tile.dataset.category!==value;tile.classList.toggle('hidden',hidden);if(!hidden)visible++});filters.forEach(btn=>{const active=btn.dataset.filter===value;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active))});if(count)count.textContent=(count.dataset.countPrefix||'Projects: ')+visible};
  filters.forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter)));if(filters.length)applyFilter('all');
  const heroImage=document.querySelector('.hero-image');if(heroImage&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&matchMedia('(pointer:fine)').matches){addEventListener('scroll',()=>{if(scrollY>innerHeight)return;heroImage.style.transform=`scale(1.008) translateY(${scrollY*.025}px)`},{passive:true})}
  // On project detail pages keep the project query when switching language.
  document.querySelectorAll('[data-lang-switch]').forEach(link=>{const q=new URLSearchParams(location.search);if(q.has('project'))link.href+=`?project=${encodeURIComponent(q.get('project'))}`});
})();
