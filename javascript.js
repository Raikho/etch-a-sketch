const container = document.querySelector('div.container')

const pixels = [];
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            row.appendChild(pixel);
        }
        pixels[i] = row;
        container.appendChild(row);
    }
}

createGrid(16);