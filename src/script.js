const gridRange = document.querySelector("#grid-range");
const gridlabel = document.querySelector("#grid-label")
const colorPicker = document.querySelector("#color-picker");
const colorModeButton = document.querySelector('.option.color-mode');
const rainbowModeButton = document.querySelector('.option.rainbow-mode');
const eraserButton = document.querySelector('.option.eraser');
const clearButton = document.querySelector('.option.clear');
const drawingBoard = document.querySelector(".board");
//app should create grid on the board which will be from 1X1 to 64X64
  //run loop from 1 to loop.value**2 
  //create squares
  //insert them to the board
//it should have grid tracker below the input range
gridRange.addEventListener("change",()=>{
    createGrid(gridRange.value**2);
});
function createGrid(gridNumber){
    const gridRow = Math.sqrt(gridNumber);
    if(drawingBoard.innerHTML.length > 0){
        drawingBoard.innerHTML = "";
    };
    for(let i = 0; i < gridNumber;i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `${100/gridRow}%`;
        drawingBoard.appendChild(square);
    };
    gridlabel.textContent = `${gridRow}X${gridRow}`
}
