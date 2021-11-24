let board = document.querySelector('#board');
// let winWidth = window.innerWidth;
// let winHeight = window.innerHeight;
// let count = winWidth * winHeight;
// console.log('sds', winWidth);
// console.log('dsd', winHeight);
// console.log('count', count)
const SQUARES_NUMBER = 300;
let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'pink', 'cyan'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square);
}

function setColor(element) {
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    let = index = Math.floor(Math.random() * colors.length);
    return colors[index];
}