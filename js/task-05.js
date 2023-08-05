const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handlerName);
function handlerName(evt) {
  nameOutput.textContent = evt.currentTarget.value.trim();
  if (evt.currentTarget.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  }
}
