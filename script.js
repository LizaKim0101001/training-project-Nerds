const closeButton = document.querySelector('.modal-close-button');
const modalPopup = document.querySelector(".modal");

closeButton.addEventListener('click', () => {
  modalPopup.classList.add('visually-hidden');
})
