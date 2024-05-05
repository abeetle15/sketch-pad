// const all the elemnts
const pad = document.querySelector('.pad');
const resizeBtn = document.querySelector('.resizeBtn');
const clearBtn = document.querySelector('.clearBtn');
const blackColor = document.querySelector('.black')
const redColor = document.querySelector('.red')
const greenColor = document.querySelector('.green')
const blueColor = document.querySelector('.blue')
const yellowColor = document.querySelector('.yellow');
let globPix;


const black = 'rgb(9, 9, 9)';
const red = 'rgb(247, 5, 22)';
const green = 'rgb(63, 173, 50)';
const blue = '#2279CE';
const yellow = '#FDF124';

let color = black;
let mouseFlag = false;
let pixels = document.querySelectorAll('.pixel');

clearBtn.addEventListener('click', () => {
  clear();
});

blackColor.addEventListener('click', () => {
  changeColor(black)

})
redColor.addEventListener('click', () => {
  changeColor(red)
})
greenColor.addEventListener('click', () => {
  changeColor(green)
})
blueColor.addEventListener('click', () => {
  changeColor(blue)
})
yellowColor.addEventListener('click', () => {
  changeColor(yellow)
})


resizeBtn.addEventListener('click', () => {
  resize()
});

document.addEventListener('DOMContentLoaded', function () {
  createGrid(60);
  adEv();
})


function createGrid(resolution) {

  for (let i = 1; i <= (resolution * resolution); i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('pixel')
    pad.appendChild(newDiv);
    const perc = 100 / resolution;
    newDiv.setAttribute('style', `flex-basis: ${perc}%`)
  }

}

function adEv() {
  pad.addEventListener('mousedown', handler);
}

function handler() {

  let pixels = document.querySelectorAll('.pixel');
  globPix = pixels;


  // Check Mouse
  if (!mouseFlag) {
    mouseFlag = true;

  } else if (mouseFlag) {
    mouseFlag = false;

  }
  // pixelEvent
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', paint);
  })
}

function paint(event) {
  if (mouseFlag) {


    event.target.style.backgroundColor = color;
  } else {

  }
}

function changeColor(choice) {
  color = choice;
}

function resize() {
  pad.innerHTML = '';
  let userSize = prompt('please input a number between 1 and 100')
  if (userSize < 0 || userSize > 100) {
    alert('your number is outside of the range\nplease follow insctrucitons')
  } else {
    createGrid(userSize);

  }
}

function clear() {
  globPix.forEach((pixel) => {
    pixel.style.backgroundColor = 'rgb(248, 248, 246)';
  })
}

