function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const bodyEl = document.body;
const spanEl = document.querySelector('.color');

btnColor.addEventListener("click", onBtnClick);
function onBtnClick() {
  const currentColor = getRandomHexColor();
  console.log("Hello");
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;  
}