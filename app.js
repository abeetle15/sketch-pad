// const all the elemnts
const body = document.querySelector('body');
const pad = document.querySelector('.pad');
const drawBtn = document.querySelector('.drawBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const resizeBtn = document.querySelector('.resizeBtn');
const clearBtn = document.querySelector('.clearBtn');
const blackColor = document.querySelector('.black')
const redColor = document.querySelector('.red')
const greenColor = document.querySelector('.green')
const blueColor = document.querySelector('.blue')
const yellowColor = document.querySelector('.yellow');

// const all colors to use in functions
const black = 'rgb(9, 9, 9)';
const red = 'rgb(247, 5, 22)';
const green = 'rgb(63, 173, 50)';
const blue = '#2279CE';
const yellow = '#FDF124';
const white = 'rgb(248, 248, 246)';

let userSize;
let globSize;
let color = black;
let colorName = 'black';
let mouseFlag = false;
let userColors = [black];

let pixels = document.querySelectorAll('.pixel');

eraseBtn.addEventListener('click', e => { eraser() })

clearBtn.addEventListener('click', e => { clear() })

resizeBtn.addEventListener('click', e => { resize() })

blackColor.addEventListener('click', e => { changeColor(black) })
redColor.addEventListener('click', e => { changeColor(red) })
greenColor.addEventListener('click', e => { changeColor(green) })
blueColor.addEventListener('click', e => { changeColor(blue) })
yellowColor.addEventListener('click', e => { changeColor(yellow) })

document.addEventListener('DOMContentLoaded', e => {
  createGrid(60);
  adEv();
  hoverEffect();
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
  pad.addEventListener('click', e => {
    let pixels = document.querySelectorAll('.pixel');
    globPix = pixels;

    // toggle a flag to decide when to paint based on click
    if (!mouseFlag) {
      mouseFlag = true;

    } else if (mouseFlag) {
      mouseFlag = false;
    }
    // when user wants to paint every div mouse enter gets colored
    pixels.forEach((pixel) => {
      pixel.addEventListener('mousemove', paint);
    })
    e.target.style.backgroundColor = color;

    cursorImg();
  });
}


function paint(event) {
  if (mouseFlag) {
    event.target.style.backgroundColor = color;
  } else {

  }
}

function hoverEffect() {
  colorNamer(color);

  // add hover class when cursor enters
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', e => {
      e.target.classList.add('hover' + colorName)
    })
  })

  // remove hover class when it leaves
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseleave', e => {
      e.target.classList.remove('hover' + colorName)
    })
  })
}

function cursorImg() {
  if (mouseFlag) {
    body.classList.add('paintBrush');
    console.log(body.classList);
  } else if (!mouseFlag) {
    body.classList.remove('paintBrush');
    console.log(body.classList);
  }
}

function eraser() {
  changeColor(white);
}

function resize() {
  let userSize = prompt('please input a number between 1 and 100\nsmall number = big pixels\nthis will clear the current drawing')
  if (userSize < 0 || userSize > 100) {
    alert('your number is outside of the range\nplease follow insctrucitons')
  } else if (userSize === null) {
    return;
  } else {
    pad.innerHTML = '';
    createGrid(userSize);
    hoverEffect();
    globSize = userSize;
  }
}

function clear() {
  if (globSize) {

    pad.innerHTML = '';
    createGrid(globSize);
    hoverEffect();
  } else {

    pad.innerHTML = '';
    createGrid(60);
    hoverEffect();
  }

  let pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.classList.remove('hover' + colorName)
  })
  hoverEffect();

}

function changeColor(choice) {
  // remove previous color hover class
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', e => {
      e.target.classList.remove('hover' + colorName)
    })
  })

  // change color
  color = choice;
  userColors.push(color);

  // update name
  colorNamer(color)

  // add new color hover class
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', e => {
      e.target.classList.add('hover' + colorName)
    })
  })
}

function prevColor() {
  if (userColors.length > 1) {
    color = userColors[(userColors.length - 2)];
  }
};

function colorNamer(currCol) {
  switch (currCol) {
    case black: colorName = 'Black'; break;
    case red: colorName = 'Red'; break;
    case green: colorName = 'Green'; break;
    case blue: colorName = 'Blue'; break;
    case yellow: colorName = 'Yellow'; break;
    case white: colorName = 'White'; break;
  }
}

