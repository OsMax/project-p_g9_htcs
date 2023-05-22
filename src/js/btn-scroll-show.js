const btnUp = {
  btn: document.querySelector('.go-top'),
  show() {
    this.btn.classList.add('show');
  },
  hide() {
    this.btn.classList.remove('show');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        this.show();
      } else {
        this.hide();
      }
    });
  },
};

btnUp.addEventListener();
