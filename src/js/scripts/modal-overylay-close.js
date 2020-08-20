// function closeModal(selector) {
//   const modal = document.querySelectorAll(`.${selector}`);
//
//   modal.forEach(modalWindow => {
//     modalWindow.addEventListener('click', event => {
//       event.preventDefault();
//       let target = event.target;
//
//       if(target.classList.contains(selector)) {
//         modalWindow.classList.add(`${selector}--closed`);
//       }
//     })
//   })
// }
//
// closeModal('popup');
