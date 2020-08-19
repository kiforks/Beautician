'use strict';

function toggleSelectors(button, selector, accessibility = false, focus = false) {
  const acc = () => accessibility ? visuallyHidden : closedSelector;
  const toggleSelector = document.querySelectorAll('.' + selector);
  const toggleButton = document.querySelectorAll('.' + button);
  const closedSelector = selector + '--closed';
  const visuallyHidden = 'visually-hidden';
  const hidingClass = acc();
  const focusOpenClass = selector + '--opened';

  if(focus) {
    toggleButton.forEach(buttonItem => {
      buttonItem.onfocus = () => {
        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          if(!(classList.contains(focusOpenClass))){
            classList.add(focusOpenClass);
          }
        })
      };
      buttonItem.onblur = () => {
        toggleSelector.forEach(selectorItem => {
          selectorItem.classList.remove(focusOpenClass);
        })
      }
    })
  } else {
    toggleButton.forEach(buttonItem => {
      buttonItem.addEventListener('click', event => {
        event.preventDefault();

        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          classList.contains(hidingClass) ? classList.remove(hidingClass) : classList.add(hidingClass);
        })
      })
    })
  }
}

toggleSelectors('header__button','header');
toggleSelectors('header__button','main-body');
toggleSelectors('button--modal','popup');
toggleSelectors('header__tel','popup');
toggleSelectors('header__tel','popup__wrapper');
toggleSelectors('popup__button-closed','popup');
toggleSelectors('popup__button-closed--wrapper','popup__wrapper');


