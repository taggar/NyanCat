/*
Objects to manipulate and accompanying event listeners
*/
const body = document.getElementsByTagName('body')[0];
const main = document.getElementById('main');
const doge = document.getElementById('doge');
const dogpic = document.getElementById('dogpic');
const backgroundImage = 'url(\'naynback9_shop_preview.png\')';
const audio = new Audio('nyancat.mp3');

// Accompanying event listeners
window.addEventListener('load', changeButtonText);
doge.addEventListener('mouseenter', showIcon);
doge.addEventListener('mouseleave', hideIcon, false);
doge.addEventListener('click', toggleDogPicture, false);
dogpic.addEventListener('click', rainNyanCats, false);

function changeButtonText() {
  doge.innerHTML = 'Woof!';
}

function showIcon() {
  doge.innerHTML = '<img src=\'doggo.png\'>';
}

function hideIcon() {
  changeButtonText();
}

// Show and hide picture each time button is clicked
function toggleDogPicture() {
  if (dogpic.style.display == null || dogpic.style.display == 'none') {
    // Calculate a different position and size for the image each time
    let top = Math.floor(Math.random() * 60) + '%';
    let left = Math.floor(Math.random() * 60) + '% ';
    let width = (Math.floor(Math.random() * 400) + 10) + 'px';
    // Set the calculated properties
    dogpic.style.top = top;
    dogpic.style.left = left;
    dogpic.style.width = width;
    dogpic.style.display = 'block';
  } else {
    dogpic.style.display = 'none';
  }
}


function removeBackground() {
  body.style.backgroundImage = 'none';
}

function rainNyanCats() {
  body.style.backgroundImage = backgroundImage;
  main.style.visibility = 'hidden';

  animateCat();

}

function createCat() {
  let cat = document.createElement('img');
  cat.src = 'nyancat.png';
  cat.className = 'cat';
  /*
  Randomize position along the top of the viewport, and also generate negative
  positions otherwise the bottom left never gets rain.
  Also move the image above the top as we want to hide it initially.
  */
  let left = Math.floor(parseInt(body.clientWidth) * Math.random()) * (Math.floor(Math.random() * 2) == 1 ? 1 : -1);
  //left *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  left = left + 'px';
  cat.style.left = left;
  cat.style.transform = 'none';
  body.appendChild(cat);
}

function animateCat() {
  let cat = createCat();
  setTimeout(function (cat) {
    let xTarget = Math.floor(Math.random() * parseInt(body.clientWidth));
    // calculate random speed
    let speed = (Math.random() * xTarget) % 10 + 2;
    // console.log('xTarget: ' + xTarget);
    // console.log('speed: ' + speed);
    cat.style.transition = 'all ' + speed + 's ease-in ' + Math.floor(Math.random() * xTarget / 10) + 's';
    cat.style.top = '100vh';
    cat.style.left = xTarget + 'px';
    cat.style.transform = 'rotateY(7200deg)';
  }, 100);
}