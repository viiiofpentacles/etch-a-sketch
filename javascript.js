const gridContainer = document.querySelector('#gridContainer');

const resetButton = document.getElementById('resetButton');

let defaultSquares=256;

function makeGrid(){

    for (i = 0; i<defaultSquares; i++){
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

        resetButton.addEventListener("click", ()=> {
            gridContainer.removeChild(grids);
            })

    }
}

makeGrid();


