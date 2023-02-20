const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
  const inputLength = event.currentTarget.value.length;
  const requiredLength = event.currentTarget.dataset.length;


  if (inputLength === Number(requiredLength)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});