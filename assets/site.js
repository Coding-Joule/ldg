(() => {
  const header = document.querySelector('.site-header');
  const setHeader = () => {
    if (!header) return;
    if (header.classList.contains('light')) return;
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  setHeader();
  addEventListener('scroll', setHeader, {passive:true});

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '关闭' : '菜单';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const filterBtns = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(card => card.classList.toggle('hidden', f !== '全部' && card.dataset.category !== f));
  }));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
