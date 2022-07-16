const container = document.querySelector('div.container')

const pixels = [];
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('square');
        // pixel.textContent = `${i},${j}`;
        row.appendChild(pixel);
    }
    pixels[i] = row;
    container.appendChild(pixels[i])
}

