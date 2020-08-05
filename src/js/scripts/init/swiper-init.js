function initSwiper(slider) {
  if(!slider) {
    return;
  }

  if(!document.querySelector('.main--preparations')) {
    let mySwiper = new Swiper(`.${slider.containerClass}`, {
      pagination: {
        el: `.${slider.container}__pagination`,
        type: `bullets`,
        currentClass: `${slider.container}__current`,
        totalClass: `${slider.container}__total`,
        bulletClass: `${slider.container}__bullet`,
        bulletActiveClass: `${slider.container}__bullet--active`,
        clickable: true
      },
      navigation: {
        nextEl: `.${slider.container}__button--next`,
        prevEl: `.${slider.container}__button--prev`,
        disabledClass: `${slider.container}__button--disabled`,
      },
      effect: slider.effect || 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      loop: slider.loop || false,
      autoplay: slider.autoplay || false,
      slidesPerView: slider.slidesPerView || 1,
      spaceBetween: +slider.spaceBetween || 30,
      wrapperClass: `${slider.container}__list`,
      slideClass: `${slider.container}__item`,
      slideActiveClass: `${slider.container}__item--active`,
      slideDuplicateActiveClass: `${slider.container}__item-duplicate--active`,
      slideVisibleClass: `${slider.container}__item--visible`,
      slideDuplicateClass: `${slider.container}__item-duplicate`,
      slideNextClass: `${slider.container}__item--next`,
      slideDuplicateNextClass: `${slider.container}__item-duplicate--next`,
      slidePrevClass: `${slider.container}__item--prev`,
      slideDuplicatePrevClass: `${slider.container}__item-duplicate--prev`,
      slideBlankClass: `${slider.container}__invisible-blank`,
      bulletClass: `${slider.container}__bullet`,
      bulletActiveClass: `${slider.container}__bullet--active`,
      modifierClass: `${slider.container}__pagination`,
      hiddenClass: `${slider.container}__hidden`,
      progressbarFillClass: `${slider.container}__progressbar-fill`,
      clickableClass: `${slider.container}__clickable`,
      lockClass: `${slider.container}__lock`,
      progressbarOppositeClass: `${slider.container}__progressbar-opposite`,
      breakpoints: {
        320: {
          slidesPerView: slider.mobileSlidesPerView || 1
        },
        768: {
          slidesPerView: slider.tabletSlidesPerView || 1
        },
        1199: {
          slidesPerView: slider.desktopSmallSlidesPerView || 1
        }
      }
    });
  }
}

const mainSlider = {
  container: 'gallery',
  containerClass: 'gallery',
  loop: true,
  autoplay: true
};

const reviews = {
  container: 'reviews',
  containerClass: 'reviews__container',
  slidesPerView: 4,
  effect: "slide",
  tabletSlidesPerView: 3,
  desktopSmallSlidesPerView: 4
};

initSwiper(mainSlider);
initSwiper(reviews);











