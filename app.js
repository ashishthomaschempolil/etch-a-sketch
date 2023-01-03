const sketchGrid = document.getElementById('sketch-grid');
const rainbow = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

// get the default color of the sketch grid
const styles = getComputedStyle(document.documentElement); // get the root element
const sketchGridDefaultColor = styles.getPropertyValue('--color-secondary');

// get the size of the grid
const gridSize = document.getElementById('grid-size');
let n = gridSize.value;

// update the grid size
gridSize.addEventListener('change', () => {
    n = gridSize.value;
    if (n < 1 || n > 100){
        alert('Please enter a value between 1 and 100');
        return;
    }
    updateGrid(n);
});

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

function getRandomColor(rainbow){
    return rainbow[Math.floor(Math.random() * rainbow.length)];
}

function clearGrid(){
    divs = document.querySelectorAll('.grid-item');
    divs.forEach((div) => {
        div.setAttribute('style', `background-color: ${sketchGridDefaultColor};`);
    });
}

function changeSquareColor(colors){
    divs = document.querySelectorAll('.grid-item');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            color = getRandomColor(colors);
            div.setAttribute('style', `background-color: ${color}`);
        });
    });
}

buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'clear'){
            clearGrid();
        } else if (button.id == 'rainbow'){
            changeSquareColor(rainbow);
        } else if (button.id == 'black'){
            changeSquareColor(['black']);
        } else if (button.id == 'eraser'){
            changeSquareColor([sketchGridDefaultColor]);
        }
    });
});
