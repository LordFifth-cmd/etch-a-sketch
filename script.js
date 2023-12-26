const color = document.querySelector("#colorpicker");
const size = document.querySelector("#size");
const sizeDisplay = document.querySelector("#size-display")
const etch = document.querySelector("#etch")
const clearButton = document.querySelector("#clear")
let colorPick = "black"

// console.log(color)

size.addEventListener("input", (e) => {
  sizeDisplay.innerText = `${e.target.value} X ${e.target.value}`;
  createEtchBlocks(e.target.value)
  // console.log(e.target.value);
}
)

color.addEventListener("input", (e) => {
  colorPick =  e.target.value
})

clearButton.addEventListener("click", (e)=> {
  for (const child of etch.children) {
    child.style.backgroundColor ="white"
  }
  etch.style.backgroundColor = "white"
})

etch.addEventListener("mousemove", (e) => {
  e.target.style.backgroundColor = colorPick
})

function createEtchBlocks(number) {
  let maxLimit = number * number
  while (etch.firstChild) {
    etch.removeChild(etch.firstChild);
  }
  for (let i = 1; i <= maxLimit; i++) {
    let block = document.createElement("div")
    block.style.width = `${400/number}px`;
    block.style.height = `${400/number}px`;
    etch.appendChild(block);
  }
}