const gridRange = document.querySelector("#grid-range");
const gridlabel = document.querySelector("#grid-label")
const colorPicker = document.querySelector("#color-picker");
const colorModeButton = document.querySelector('.color-mode');
const rainbowModeButton = document.querySelector('.rainbow-mode');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');
const drawingBoard = document.querySelector(".board");
const buttons = document.querySelectorAll("button")
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
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("color-mode")) {
                childen.forEach((square) => {
                    square.addEventListener("mousemove", displayColor);
                });
            } else if (button.classList.contains("rainbow-mode")) {
                childen.forEach((square) => {
                    square.addEventListener("mousemove", displayRainbowColor);
                });
            }
        });
    });
};
function displayColor() {
    this.style.background = colorPicker.value;
};
function displayRainbowColor() {
    const rainbowHexCodes = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];
    const randomIdx = Math.floor(Math.random() * rainbowHexCodes.length - 1);
    this.style.background = rainbowHexCodes[randomIdx];
}