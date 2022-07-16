const container = document.querySelector('div.container')
const button = document.querySelector('button');
button.onclick = changeSize;
let tiles = [];
createGrid(16);

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++) {
            const tile = document.createElement('div');
            addHoverEvent(tile);
            row.appendChild(tile);
        }
        tiles[i] = row;
        container.appendChild(row);
    }
}

function eraseGrid() {
    for (let i = 0; i < tiles.length; i++) {
        const row = tiles[i];
        container.removeChild(row);
    }
    tiles = [];
}

function changeSize() {
    const size = Number(prompt('Enter new size (max 100)', 10));
    if (size === NaN || size > 100 || size < 1) return;
    eraseGrid();
    createGrid(size);
}

function addHoverEvent(element) {
    element.addEventListener('mouseover', (event) => {
        if (event.which != 1) // if left mouse is up
            return;
        colorTile(event);
    });
    element.addEventListener('click', (event) => {
        colorTile(event);
    });
}

function colorTile(event) {
    event.target.style.backgroundColor = 'red';
}