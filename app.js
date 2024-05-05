// const all the elemnts
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

const black = 'rgb(9, 9, 9)';
const red = 'rgb(247, 5, 22)';
const green = 'rgb(63, 173, 50)';
const blue = '#2279CE';
const yellow = '#FDF124';
const white = 'rgb(248, 248, 246)';

let globPix;
let userColors = [black];
let color = black;
let mouseFlag = false;

let pixels = document.querySelectorAll('.pixel');

drawBtn.addEventListener('click', e => { prevColor() })

eraseBtn.addEventListener('click', e => { eraser() })

clearBtn.addEventListener('click', e => {
  clear();
});

blackColor.addEventListener('click', e => {
  changeColor(black)

})
redColor.addEventListener('click', e => {
  changeColor(red)
})
greenColor.addEventListener('click', e => {
  changeColor(green)
})
blueColor.addEventListener('click', e => {
  changeColor(blue)
})
yellowColor.addEventListener('click', e => {
  changeColor(yellow)
})


resizeBtn.addEventListener('click', e => {
  resize()
});

document.addEventListener('DOMContentLoaded', e => {
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
  pad.addEventListener('click', () => {
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
      pixel.addEventListener('mouseenter', paint);
    })
  });
}


function paint(event) {
  if (mouseFlag) {
    event.target.style.backgroundColor = color;
  } else {

  }
}

function changeColor(choice) {
  color = choice;
  userColors.push(color);
}

function eraser() {
  changeColor(white);
}

function prevColor() {
  if (userColors.length > 1) {
    color = userColors[(userColors.length - 2)];
  }
};

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

