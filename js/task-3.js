const fieldEl = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
console.log(fieldEl);
console.log(userName);

fieldEl.addEventListener('input', () => {
if (!fieldEl.value.trim()) {
    userName.textContent = 'Anonymous';
} else {
    userName.textContent = fieldEl.value.trim();
}
});
