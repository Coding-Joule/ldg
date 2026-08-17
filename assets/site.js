(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.nav');
  const btn = document.querySelector('.menu-btn');
  const hasHero = document.querySelector('.hero, .detail-hero');
  let lastY = window.scrollY;

  const syncHeader = () => {
    if (!header) return;
    const y = window.scrollY;
    if (hasHero && !header.classList.contains('light')) {
      const threshold = Math.max(120, window.innerHeight * .66);
      header.classList.toggle('scrolled', y > threshold);
    }
    if (y > lastY && y > 220 && !header.classList.contains('menu-active')) header.classList.add('hidden');
    else header.classList.remove('hidden');
    lastY = y;
  };
  window.addEventListener('scroll', syncHeader, {passive:true});
  syncHeader();

  if (btn && menu && header) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      header.classList.toggle('menu-active', open);
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? '关闭' : '菜单';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      header.classList.remove('menu-active');
      document.body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded','false');
      btn.textContent='菜单';
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), {threshold:.08, rootMargin:'0px 0px -40px 0px'});
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('in'));

  const filters = document.querySelectorAll('.filter-btn');
  const tiles = document.querySelectorAll('.project-tile');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const value = button.dataset.filter;
    tiles.forEach(tile => tile.classList.toggle('hidden', value !== '全部' && tile.dataset.category !== value));
  }));
})();
