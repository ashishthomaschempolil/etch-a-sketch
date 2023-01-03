const sketchGrid = document.getElementById('sketch-grid');

let n = 50;
// sketchGrid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
// sketchGrid.style.gridTemplateRows = `repeat(${n}, 1fr)`;

// // create a grid of div of n*n size in square shape
// for (let i = 0; i < n*n; i++) {
//     const div = document.createElement('div');
//     div.classList.add('grid-item');
//     sketchGrid.appendChild(div);
// }
function updateGrid(n){
    // clear the grid
    sketchGrid.innerHTML = '';

    // update the grid size
    sketchGrid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    // create a grid of div of n*n size in square shape
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        sketchGrid.appendChild(div);
    }
}

updateGrid(n);

