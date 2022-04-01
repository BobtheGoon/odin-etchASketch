function createGrid(y, x) {
    const container = document.getElementById('container');
    for (let i = 0; i < y; ++i) {
        div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);

    }
}

createGrid(16, 16)