//инициализация слайдера
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  slidesOffsetBefore: 15,

  slidesPerView: "auto",
  spaceBetween: 15,
});


//появление товаров

let buttonMore = document.querySelector('.button-more');
let buttonHide = document.querySelector('.button-hide')
let sectionItems = document.querySelector('.section__items').children;
let mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
let mediaDesktop = window.matchMedia('(min-width: 1120px)');

let checkScreenWidh = function() {

  if (mediaTablet.matches) {
    for (let i = 6; i < sectionItems.length; i++) {
      sectionItems[i].classList.add('visually--hidden');
    }
    return
  } 

  if (mediaDesktop.matches) {
    for (let i = 8; i < sectionItems.length; i++) {
      sectionItems[i].classList.add('visually--hidden');
    }
    return
  }
};

checkScreenWidh();

buttonMore.addEventListener('click', function (evt) {
  evt.preventDefault();
  buttonMore.classList.toggle('visually--hidden');
  buttonHide.classList.toggle('visually--hidden')


  for(let i = 6; i < sectionItems.length; i++) {

    if (mediaTablet.matches) {
      sectionItems[i].classList.remove('visually--hidden');
    } else if (mediaDesktop.matches) {
      sectionItems[i].classList.remove('visually--hidden');
    }
    
  }
});

buttonHide.addEventListener('click', function (evt) {
  evt.preventDefault();

  buttonHide.classList.toggle('visually--hidden');
  buttonMore.classList.toggle('visually--hidden');

  if (mediaTablet.matches) {
    for (let i = 6; i < sectionItems.length; i++) {
      sectionItems[i].classList.add('visually--hidden');
    }
  } else if (mediaDesktop.matches) {
      for (let i = 8; i < sectionItems.length; i++) {
        sectionItems[i].classList.add('visually--hidden');
      }
  }

  })
