
const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("input", (eventIn) => {
    outputElem.textContent = eventIn.currentTarget.value.trim() || "Anonymous";     
}); 

