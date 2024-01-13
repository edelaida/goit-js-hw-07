
const ulElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulElem.length}`);
const children = ulElem[1].children;
ulElem.forEach((num, idx) => {
   const children = ulElem[idx].children; 
    console.log(`Category: ${children[0].textContent}`); 
    console.log(`Elements: ${children[1].childElementCount}`);
});

