const fontSizeControl = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');
fontSizeControl.addEventListener('input', onInputFontSize);
function onInputFontSize(evt) {
  const fontTest = evt.currentTarget.value;
  changedText.style.fontSize = `${fontTest}px`;
}
