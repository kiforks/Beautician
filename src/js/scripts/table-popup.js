function tablePopUp() {
  let tableButton = document.querySelectorAll('.preparations__table-button');

  tableButton.forEach(button => {
    button.onclick = event => {
      let parentRow = event.target.closest('.preparations__tbody');
      let hiddenRows = parentRow.querySelectorAll('.preparations__row--main');
      let closedClass = '--closed';

      if(!parentRow) return;

      if(button.classList.contains(`preparations__table-button${closedClass}`)) {
        button.classList.remove(`preparations__table-button${closedClass}`);
      } else {
        button.classList.add(`preparations__table-button${closedClass}`);
      }

      hiddenRows.forEach(rows => {
        if(rows.classList.contains(`preparations__row${closedClass}`)) {
          rows.classList.remove(`preparations__row${closedClass}`);
        } else {
          rows.classList.add(`preparations__row${closedClass}`);
        }
      });
    };
  })
}

tablePopUp();
