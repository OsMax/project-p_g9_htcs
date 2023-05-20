(() => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const openMenuBtn = document.querySelector('#open-menu');
  const closeMenuBtn = document.querySelector('#close-menu');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    mobileMenu.classList.toggle('is-open');
  }
})();
