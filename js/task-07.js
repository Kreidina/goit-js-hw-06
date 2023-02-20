const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.log(inputEl);
console.log(textEl.style);

inputEl.addEventListener('input', (event) =>{
    textEl.style.fontSize = event.currentTarget.value +'px';
});