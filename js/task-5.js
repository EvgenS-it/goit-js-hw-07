function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorName = document.querySelector(".color");

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}

changeBtn.addEventListener('click', changeBackgroundColor);

