const output = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

incrementBtn.addEventListener('click', onIncrementBtnClick);
function onIncrementBtnClick(evt) {
  counterValue += 1;
  output.textContent = counterValue;
}
decrementBtn.addEventListener('click', onDecrementBtnClick);
function onDecrementBtnClick(evt) {
  counterValue -= 1;
  output.textContent = counterValue;
}
