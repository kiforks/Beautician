function toggleThanks() {
  const thanks = document.querySelectorAll('.thanks');

  thanks.forEach(modal => {
    if(modal.classList.contains('thanks--closed')) {
      modal.classList.remove('thanks--closed');
    } else {
      modal.classList.add('thanks--closed');
    }
  })
}
