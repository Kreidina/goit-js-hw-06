function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyStyle = document.querySelector('body');

function changeBodyColor(){
  bodyStyle.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener('click', changeBodyColor);


