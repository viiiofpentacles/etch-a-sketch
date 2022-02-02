const gridContainer = document.querySelector('#gridContainer');
    for (let i = 0; i<256; i++){
        let grids = document.createElement('div');
        grids.style.border='1px solid brown';
        grids.style.width= '30px';
        grids.style.height= '30px';
        grids.style.display='flex';
        grids.style.flexWrap='wrap';
        gridContainer.appendChild(grids);
    };

