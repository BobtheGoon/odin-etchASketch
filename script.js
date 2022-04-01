function createGrid(size) {
    const container = document.getElementById('container');

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

createGrid(16)

const div = document.getElementsByClassName('horizontal');

for (i = 0; i<div.length; ++i) {
div[i].addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
})}