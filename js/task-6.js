function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amInput = document.querySelector("#controls input");
const boxCreate = document.querySelector('[data-create]');
const boxDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector("#boxes");

boxCreate.addEventListener("click", onCreateClick);
boxDestroy.addEventListener("click", onDestroyClick);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.append(box);
  }
 }

function onCreateClick() {
  const userValue = Number(amInput.value);
  onDestroyClick()
  if (userValue >= 1 && userValue <= 100) {
    createBoxes(userValue);   
  }     
}

function onDestroyClick() {
  amInput.value = "";
  divBoxes.innerHTML = "";
}


