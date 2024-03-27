const body = document.body;
const slides = Array.from(
  document.querySelectorAll('.slide'),
);
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

function setBgToBody() {
  body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}
setBgToBody();

function setActiveSlide() {
  slides.forEach((item) =>
    item.classList.remove('active'),
  );

  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});
