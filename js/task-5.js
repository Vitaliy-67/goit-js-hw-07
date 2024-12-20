function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const boxEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();
  boxEl.style.backgroundColor = backgroundColor;
  spanEl.textContent = backgroundColor;
  console.log(backgroundColor);
});
