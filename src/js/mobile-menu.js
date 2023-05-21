(() => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const openMenuBtn = document.querySelector('#open-menu');
  const closeMenuBtn = document.querySelector('#close-menu');
  const changeHeaderNav = document.querySelector('#change-header-nav');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-open');
    changeHeaderNav.classList.toggle('is-open');
  }
})();
