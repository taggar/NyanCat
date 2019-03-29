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
doge.addEventListener('mouseleave', hideIcon);
doge.addEventListener('click', toggleDogPicture);
dogpic.addEventListener('click', rainNyanCats);

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
    dogpic.style.top = Math.floor(Math.random() * 60) + '%';
    dogpic.style.left = Math.floor(Math.random() * 60) + '% ';
    dogpic.style.width = (Math.floor(Math.random() * 400) + 10) + 'px';
    dogpic.style.display = 'block';
  } else {
    dogpic.style.display = 'none';
  }
}

function rainNyanCats() {
  body.style.backgroundImage = backgroundImage;
  main.style.visibility = 'hidden';
  audio.volume = 1;
  audio.play();
  var rain = setInterval(function () {
    let cat = createCat();
    animateCat(cat);
  }, 10);
  setTimeout(function () {
    fadeAudio();
    clearInterval(rain);
    zapCats();
    body.style.backgroundImage = "none";
    main.style.visibility = "visible";
  }, 10000);
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
  let left = Math.floor(parseInt(body.clientWidth) * Math.random());
  left *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  cat.style.left = left + 'px';
  cat.style.transform = 'none';
  body.appendChild(cat);
  return cat;
}

function animateCat(cat) {
  setTimeout(function () {
    let xTarget = Math.floor(Math.random() * parseInt(body.clientWidth));
    let speed = (Math.random() * xTarget) % 10 + 2;  // calculate random speed
    cat.style.transition = 'all ' + speed + 's ease-in ' + Math.floor(Math.random() * parseInt(body.clientWidth) / 100) + 's';
    cat.style.top = '100vh';
    cat.style.left = xTarget + 'px';
    cat.style.transform = 'rotateY(7200deg)';
  }, 10);
}

function fadeAudio() {
  console.log('Inside fadeout: ' + new Date());
  var fadeAudio = setInterval(function () {
    if (audio.volume > 0.0) {
      console.log('Entering interval.');
      audio.volume -= 0.1;
      console.log(audio.volume);
    }
    // When volume at zero stop all the intervalling
    if (audio.volume <= 0.2) {
      audio.volume = 0;
      audio.pause();
      clearInterval(fadeAudio);
      console.log('Faded out: ' + new Date());
    }
  }, 100);
}

function zapCats() {
  Array.from(document.getElementsByClassName('cat')).forEach(function (cat) {
    cat.remove();
  });
}