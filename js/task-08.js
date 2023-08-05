const form = document.querySelector('.login-form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
  }
  evt.currentTarget.reset();
}
