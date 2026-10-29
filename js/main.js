// Menú móvil
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Filtros por categoría (home y autor)
document.querySelectorAll('.filters').forEach((group) => {
  const buttons = group.querySelectorAll('button[data-filter]');
  const grid = group.parentElement.closest('section')?.querySelector('[data-filterable]');
  if (!buttons.length || !grid) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const f = btn.dataset.filter;
      grid.querySelectorAll('.post-card').forEach((card) => {
        card.hidden = f !== 'all' && card.dataset.cat !== f;
      });
    });
  });
});
