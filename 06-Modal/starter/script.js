'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalSelector = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');
function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    showModal();
  });
}

closeModalSelector.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log(e.key);
    hideModal();
  }
});
