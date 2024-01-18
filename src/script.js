const gridRange = document.querySelector("#grid-range");
const colorPicker = document.querySelector("#board");
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
    console.log(gridNumber)
    for(let i = 0; i < gridNumber;i++){
        const square = document.createElement("div");
        square.classList.add("square");
        drawingBoard.appendChild(square);
        square.style.flex = `${Math.sqrt(gridNumber)}%`
    };
}
