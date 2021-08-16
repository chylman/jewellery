'use strict';

(function () {
  const Keys = {
    ESCAPE: 'Escape',
    ESC: 'Esc',
  }

  const menuToggleButton = document.querySelector('.header__toggle-button');
  const header = document.querySelector('.header');

  const popupOpenButtonLogin = document.querySelector('.header__login-link');
  const popupOpenButtonAddToCart = document.querySelector('.card__add-cart-link');
  const popups = Array.from(document.querySelectorAll('.popup'));
  const popupLogin = document.querySelector('.popup-login');
  const popupAdToCart = document.querySelector('.popup-add-to-cart');
  const popupButtonsClose = Array.from(document.querySelectorAll('.popup__button-close'));
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupInputFocus = document.querySelector('#login-email');
  const filter = document.querySelector('.filter');
  const filterButtonOpen = document.querySelector('.filter__button-open');
  const accordionsTitle = Array.from(document.querySelectorAll('.accordion__title'));
  const accordions = Array.from(document.querySelectorAll('.accordion'));

  document.body.classList.remove('body--no-js');

  const onMenuToggleButtonClick = () => {
    header.classList.toggle('header--menu-close');
    header.classList.toggle('header--menu-open');
    document.body.classList.toggle('overflow-hidden');
  }

  if (menuToggleButton) {
    menuToggleButton.addEventListener('click', onMenuToggleButtonClick);
  }

  const onPopupOpenButtonClick = (evt) => {
    evt.preventDefault();

    switch (evt.target) {
      case popupOpenButtonLogin:
        popupLogin.classList.add('popup--show');
        break;
      case popupOpenButtonAddToCart:
        popupAdToCart.classList.add('popup--show');
        break;
      default:
        break;
    }

    document.addEventListener('keydown', onPopupCloseKeydown);
    document.body.classList.add('overflow-hidden');
    popupOverlay.addEventListener('click', onPopupOverlayClick);
    popupOverlay.classList.add('popup-overlay--show');
    if (popupInputFocus) {
      popupInputFocus.focus();
    }
  }

  const onPopupButtonCloseClick = (evt) => {
    popups.forEach(element => {
      element.classList.remove('popup--show');
    });
    document.body.classList.remove('overflow-hidden');
    popupOverlay.classList.remove('popup-overlay--show');
  }

  const onPopupCloseKeydown = (evt) => {
    if (evt.key === Keys.ESCAPE ||evt.key === Keys.ESC) {
      popups.forEach(element => {
        element.classList.remove('popup--show');
      });
      document.body.classList.remove('overflow-hidden');
      popupOverlay.classList.remove('popup-overlay--show');
    }
  }

  const onPopupOverlayClick = (evt) => {
    popups.forEach(element => {
      element.classList.remove('popup--show');
    });
    document.body.classList.remove('overflow-hidden');
    popupOverlay.classList.remove('popup-overlay--show');
  }

  if (popupOpenButtonLogin) {
    popupOpenButtonLogin.addEventListener('click', onPopupOpenButtonClick);
  }

  if (popupOpenButtonAddToCart) {
    popupOpenButtonAddToCart.addEventListener('click', onPopupOpenButtonClick);
  }

  popupButtonsClose.forEach(element => {
    element.addEventListener('click', onPopupButtonCloseClick)
  });

  const onFilterButtonOpen = () => {
    filter.classList.toggle('filter--open');
    filter.classList.toggle('filter--close');
  }

  filter.classList.add('filter--close');

  if (filterButtonOpen) {
    filterButtonOpen.addEventListener('click', onFilterButtonOpen);
  }

  accordions.forEach((element) => {
    element.classList.add('accordion--close');
  })

  const onAccordionsTitleClick = (evt) => {
      evt.target.parentNode.classList.toggle('accordion--open');
      evt.target.parentNode.classList.toggle('accordion--close');
  }

  accordionsTitle.forEach(element => {
    element.addEventListener('click', onAccordionsTitleClick);
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
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
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          }
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
      },
    }
  });
}())
