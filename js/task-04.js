const startValue = document.querySelector('#value');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
 function setIndicatorDecrement(){
    counterValue -= 1;
    startValue.textContent = counterValue;
 };
 function setIndicatorIncrement (){
    counterValue += 1;
    startValue.textContent = counterValue;
 } ;
 plusBtn.addEventListener('click', setIndicatorIncrement);
 minusBtn.addEventListener('click', setIndicatorDecrement);
