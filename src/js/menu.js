(() => {
  const menu = {
    menuField: document.querySelector('#menu'),
    showMenuBtn: document.querySelector('#menu-show'),
    hideMenuBtn: document.querySelector('#menu-hide'),
  };

  menu.showMenuBtn.addEventListener('click', menuToggle);
  menu.showMenuBtn.addEventListener('click', menuToggle);

  function menuToggle() {
    menu.menuField.classList.toggle('show-menu');
  }
})();

// Для роботи скрипта:
// 1) на контейнер з меню треба задати id = "menu", меню за замовченням сховано;
// 2) на кнопку відкриття меню треба задати id = "menu-show";
// 3) на кнопку закриття меню треба задати id = "menu-hide";
// 4) у css прописати стиль .show-menu{ } - при якому меню буде відображатися (виїзжати, з'яклятися тощо)
