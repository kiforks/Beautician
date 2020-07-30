function initServices(slider) {
  if(!slider) {
    return;
  }


  let services = new Swiper(`.${slider.containerClass}`, {
    pagination: {
      el: `.${slider.container}__pagination`,
      type: `fraction`,
      currentClass: `${slider.container}__current`,
      totalClass: `${slider.container}__total`,
      bulletClass: `${slider.container}__bullet`,
      bulletActiveClass: `${slider.container}__bullet--active`
    },
    navigation: {
      nextEl: `.${slider.container}__button--next`,
      prevEl: `.${slider.container}__button--prev`,
      disabledClass: `${slider.container}__button--disabled`,
    },
    loop: false,
    speed: 500,
    slidesPerView: 1,
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
        pagination: {
          type: 'bullets',
          clickable: true
        }
      },
      768: {
        pagination: {
          type: 'fraction'
        }
      }
    }
  });
}

function initBullets(slider) {
  if(!slider) {
    return;
  }

  let tabText = document.querySelectorAll(`.${slider.textClass}`);

  let tab = new Swiper(`.${slider.containerClass}`, {
    pagination: {
      el: `.${slider.container}__pagination`,
      type: `bullets`,
      currentClass: `${slider.container}__current`,
      totalClass: `${slider.container}__total`,
      bulletClass: `${slider.container}__bullet`,
      bulletActiveClass: `${slider.container}__bullet--active`,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + tabText[index].textContent + '</span>';
      },
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: `.${slider.container}__button--next`,
      prevEl: `.${slider.container}__button--prev`,
      disabledClass: `${slider.container}__button--disabled`,
    },
    loop: false,
    noSwiping: true,
    onlyExternal: true,
    speed: 500,
    autoHeight: true,
    slidesPerView: 1,
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
    modifierClass: `${slider.container}__pagination`,
    hiddenClass: `${slider.container}__hidden`,
    progressbarFillClass: `${slider.container}__progressbar-fill`,
    clickableClass: `${slider.container}__clickable`,
    lockClass: `${slider.container}__lock`,
    progressbarOppositeClass: `${slider.container}__progressbar-opposite`,
  });
}

function initMainSlider(slider) {
  if(!slider) {
    return;
  }

  let services = new Swiper(`.${slider.containerClass}`, {
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
    speed: 500,
    slidesPerView: 2,
    spaceBetween: 30,
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
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        spaceBetween: 15
      },
      1200: {
        spaceBetween: 30
      }
    }
  });
}

const services = {
  container: 'services',
  containerClass: 'services'
};

const gallery = {
  container: 'gallery',
  containerClass: 'gallery'
};

const tabMain = {
  container: 'tab',
  containerClass: 'tab',
  textClass: 'tab__text'
};

const tabBlue = {
  container: 'tab',
  containerClass: 'tab__box',
  textClass: 'tab__text--blue'
};

const tabAbout = {
  container: 'tab',
  containerClass: 'tab--about',
  textClass: 'tab__text--about'
};

const tabContacts = {
  container: 'tab',
  containerClass: 'tab__contacts',
  textClass: 'tab__text--contacts'
};

const mainSlider = {
  container: 'slider',
  containerClass: 'slider__container'
};



initMainSlider(mainSlider);
// initServices(services);
// initServices(gallery);
initBullets(tabMain);
initBullets(tabBlue);
initBullets(tabAbout);
initBullets(tabContacts);











