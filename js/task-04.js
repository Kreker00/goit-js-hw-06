const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

function takeAway() {
    counterValue -= 1;
    value.textContent = counterValue;
}
function addItion() {
    counterValue += 1;
    value.textContent = counterValue;
}

decrement.addEventListener("click", takeAway);
increment.addEventListener("click", addItion);
