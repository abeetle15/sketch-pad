// const all the elemnts
const pad = document.querySelector('.pad');
const resizeBtn = document.querySelector('.resizeBtn');
const clearBtn = document.querySelector('.clearBtn');



// when page loads create 16x16 grid of divs in the pad
window.addEventListener('DOMContentLoaded', createGrid(60));

function createGrid(resolution) {
  for (let i = 1; i <= (resolution * resolution); i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('pixel')
    pad.appendChild(newDiv);
    const perc = 100 / resolution;
    newDiv.setAttribute('style', `flex-basis: ${perc}%`)
  }

  adEv();
}

// clear button
clearBtn.addEventListener('click', () => {
  pad.innerHTML = '';
  createGrid(60);
  adEv();
})

// resize when user clicks btn
resizeBtn.addEventListener('click', () => { resize(); });
function resize() {
  pad.innerHTML = '';
  let userSize = prompt('please input a number between 1 and 100')
  if (userSize < 0 || userSize > 100) {
    alert('your number is outside of the range\nplease follow insctrucitons')
  }

  createGrid(userSize);
  adEv();
}

// function on click that changes color to black for each div
let mouseFlag = false;

function adEv() {
  pad.addEventListener('mousedown', handler)
}

function handler() {
  checkMouse();
  pixelEvent();
}

function checkMouse() {
  if (!mouseFlag) {
    mouseFlag = true;
    console.log(mouseFlag);
  } else if (mouseFlag) {
    mouseFlag = false;
    console.log(mouseFlag);
  }
}

function pixelEvent() {
  if (mouseFlag) {
    pixels.forEach((pixel) => {
      pixel.addEventListener('mouseenter', paintFlag);
    })

  } else if (!mouseFlag) {
    pixels.forEach((pixel) => {
      pixel.removeEventListener('mouseenter', paintFlag)

    })
  }
}

function paintFlag(event) {
  event.target.style.backgroundColor = '#000000';
  console.log('im in!')
}


const pixels = document.querySelectorAll('.pixel');

