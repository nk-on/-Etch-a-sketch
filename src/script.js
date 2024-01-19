const gridRange = document.querySelector("#grid-range");
const gridlabel = document.querySelector("#grid-label")
const colorPicker = document.querySelector("#color-picker");
const colorModeButton = document.querySelector('.option.color-mode');
const rainbowModeButton = document.querySelector('.option.rainbow-mode');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');
const drawingBoard = document.querySelector(".board");
gridRange.addEventListener("change", () => {
    createGrid(gridRange.value ** 2);
});
function createGrid(gridNumber) {
    const gridRow = Math.sqrt(gridNumber);
    if (drawingBoard.innerHTML.length > 0) {
        drawingBoard.innerHTML = "";
    };
    for (let i = 0; i < gridNumber; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `${100 / gridRow}%`;
        drawingBoard.appendChild(square);
    };
    gridlabel.textContent = `${gridRow}X${gridRow}`;
    const childen = drawingBoard.childNodes;
    childen.forEach((square) => {
        square.addEventListener("mouseover", displayColor);
    });
};
function displayColor() {
    this.style.background = colorPicker.value;
};
