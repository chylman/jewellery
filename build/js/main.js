'use strict';

(function () {
  const menuToggleButton = document.querySelector('.header__toggle-button');
  const header = document.querySelector('.header');
  const popupInputFocus = document.querySelector('#login-email');
  const filter = document.querySelector('.filter');
  const filterButtonOpen = document.querySelector('.filter__button-open');
  const filterButtonClose = document.querySelector('.filter__button-close');
  const accordionsTitle = Array.from(document.querySelectorAll('.accordion__title'));
  const accordions = Array.from(document.querySelectorAll('.accordion'));

  document.body.classList.remove('body--no-js');
  header.classList.toggle('header--menu-close');
  header.classList.toggle('header--menu-open');

  const onMenuToggleButtonClick = () => {
    header.classList.toggle('header--menu-close');
    header.classList.toggle('header--menu-open');
    document.body.classList.toggle('overflow-hidden');
  }

  if (menuToggleButton) {
    menuToggleButton.addEventListener('click', onMenuToggleButtonClick);
  }


  const onFilterButtonOpen = () => {
    filter.classList.toggle('filter--open');
    filter.classList.toggle('filter--close');
    document.body.classList.add('overflow-hidden');
  }

  const onFilterButtonClose = () => {
    filter.classList.toggle('filter--open');
    filter.classList.toggle('filter--close');
    document.body.classList.remove('overflow-hidden');
  }

  if (filter) {
    filter.classList.add('filter--close');
  }

  if (filterButtonOpen) {
    filterButtonOpen.addEventListener('click', onFilterButtonOpen);
  }

  if (filterButtonClose) {
    filterButtonClose.addEventListener('click', onFilterButtonClose);
  }

  accordions.forEach((element) => {
    element.classList.add('accordion--close');
  })

  const onAccordionsTitleClick = (evt) => {
    evt.target.parentNode.classList.toggle('accordion--open');
    evt.target.parentNode.classList.toggle('accordion--close');
  }

  const onAccordionsTitleKeydownEnter = (evt) => {
    if (evt.key === "Enter") {
      evt.target.parentNode.classList.toggle('accordion--open');
      evt.target.parentNode.classList.toggle('accordion--close');
    }
  }

  accordionsTitle.forEach(element => {
    element.addEventListener('click', onAccordionsTitleClick);
    element.addEventListener('keydown', onAccordionsTitleKeydownEnter);
    element.tabIndex = 0;
  });

  const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
    catchFocus: true,
    waitTransitions: true,
    closeOnEsc: true,
    closeOnOverlay: true,
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }
  });
}())
