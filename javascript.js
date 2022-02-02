const gridContainer = document.querySelector('#gridContainer');

const resetButton = document.getElementById('resetButton');


function makeGrid(numberOfSquares){

    for (let i = 0; i<numberOfSquares; i++){
        let grids = document.createElement('div');
        grids.style.border='1px solid brown';
        grids.style.width= '30px';
        grids.style.height= '30px';
        grids.classList.add('square');
        gridContainer.appendChild(grids);

        const changeColor = () => {
            grids.style.backgroundColor= 'black';
        }
        
        grids.addEventListener("mouseover", changeColor);

    }

}

resetButton.addEventListener("click", ()=>{
    gridContainer.replaceChildren();
})

/* work in progress

function newGridFunction(newGrid){
    newGrid = prompt("How many squares per side? (Max 100)");
        if(newGrid<=100){
        newGrid*=newGrid;
            for (let i = 0; i<newGrid; i++){
            let newSquares = document.createElement('div');
            newSquares.style.border='1px solid brown';
            newSquares.style.width= 'auto';
            newSquares.classList.add('square');
            gridContainer.appendChild(newSquares);
            const changeColor2 = () => {
            square.style.backgroundColor= 'black';
            grids.addEventListener("mouseover", changeColor);
        }}else if(newGrid>100){
            alert("Please enter a valid number.")
        }else{
            alert("Please enter a number.");
        }
    }  

    */

makeGrid(256);
