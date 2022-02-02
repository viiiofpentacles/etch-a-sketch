const gridContainer = document.querySelector('#gridContainer');

const resetButton = document.getElementById('resetButton');


function makeGrid(numberOfSquares){

    for (let i = 0; i<numberOfSquares; i++){
        let grids = document.createElement('div');
        grids.style.border='1px solid brown';
        grids.style.width= '30px';
        grids.style.height= '30px';
        gridContainer.appendChild(grids);

        const changeColor = () => {
            grids.style.backgroundColor= 'black';
        }
        
        grids.addEventListener("mouseover", changeColor);

    }

}

resetButton.addEventListener("click", ()=>{
    gridContainer.replaceChildren();
    newGridFunction();
})

function newGridFunction(newGrid){
    newGrid = prompt("How many squares per side? (Max 100)");
        if(newGrid<=100){
        let squareNumber =newGrid**2;
            for (let i = 0; i<squareNumber; i++){
            let newSquares = document.createElement('div');
            newSquares.style.border='1px solid brown';
            newSquares.style.width='5px';
            newSquares.style.height='5px';
            newSquares.style.flex='1 1 auto';
            newSquares.style.display = 'flex';
            newSquares.style.justifyContent = 'center';
            newSquares.style.alignItems = 'center';
            newSquares.style.boxSizing = 'border-box';
            gridContainer.appendChild(newSquares);
            
            const changeColor2 = () => {
            newSquares.style.backgroundColor= 'black';
            }
            newSquares.addEventListener("mouseover", changeColor2);
        }}else if(newGrid>100){
            alert("Please enter a valid number.")
        }else{
            alert("Please enter a number.");
        }
        
    }  



makeGrid(256);
