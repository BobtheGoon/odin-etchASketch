function createGrid(size) {
    const container = document.getElementById('container');

    if (size > 100) {
        newSize = parseInt(prompt('Size of grid is too large, please enter a smaller grid size!'))
        createGrid(newSize)
    }
    if (container.hasChildNodes()) {
        while(container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }
    if (!container.hasChildNodes()) {
        for (let i = 0; i < size; ++i) {
            outerDiv = document.createElement('div');
            outerDiv.classList.add('vertical');
            container.appendChild(outerDiv)

            for (let j = 0; j < size; ++j) {
                innerDiv = document.createElement('div');
                innerDiv.classList.add('horizontal');
                outerDiv.appendChild(innerDiv);
            }
        }
    }
    addGridListener()
}


function clearGrid() {
    const divs = document.getElementsByTagName('div');
    
    for (coloreDiv of divs) {
        coloreDiv.style.backgroundColor = 'white'
    }
    promptNewGrid()
}


function promptNewGrid() {
    let gridSize = parseInt(prompt('Input grid size'))
    createGrid(gridSize)
}


function toggleGrid() {
    if (gridOn){
        const vertical = document.querySelectorAll('.vertical')
        const horizontal = document.querySelectorAll('.horizontal')

        vertical.forEach((box) => {
            box.setAttribute('style', 'border-style: none')
        })

        horizontal.forEach((box) => {
            box.setAttribute('style', 'border-style: none')
        })
        gridOn = false
    }

    else if (!gridOn) {
        const vertical = document.querySelectorAll('.vertical')
        const horizontal = document.querySelectorAll('.horizontal')

        vertical.forEach((box) => {
            box.setAttribute('style', 'border-style: solid')
        })

        horizontal.forEach((box) => {
            box.setAttribute('style', 'border-style: solid')
        })
        gridOn = true
    }
}


function addGridListener() {
    const div = document.getElementsByClassName('horizontal');

    for (i = 0; i<div.length; ++i) {
    div[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = fillColor();
    })}
}


function rainbowOn () {
    if (!rainbowColor) {
        rainbowColor = true;
    }
    else {
        rainbowColor = false;
    }
}


function fillColor() {
    if (rainbowColor) {
        gridColor = Math.floor(Math.random()*16777215).toString(16);
        gridColor = '#' + gridColor
    }
    else {
        gridColor = 'black';
    }
    return gridColor
}

createGrid(16)
let gridColor = 'black';
let gridOn = true;
let rainbowColor = false;

const clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid);

const grid = document.getElementById('grid');
grid.addEventListener('click', toggleGrid);

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', rainbowOn);