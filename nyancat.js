/*
Objects to manipulate and accompanying event listeners
*/

const audio = new Audio('nyancat.mp3');

// containers
window.addEventListener('load', changeButtonText, false);
const body = document.getElementsByTagName('body')[0];
const main = document.getElementById('main');

// the doge button
const doge = document.getElementById('doge');
doge.addEventListener('mouseenter', showIcon, false);
doge.addEventListener('mouseleave', hideIcon, false);
doge.addEventListener('click', toggleDogPicture, false);

// the dog picture
const dogpic = document.getElementById('dogpic');
dogpic.addEventListener('click', rainNyanCats, false);

/* 
Dog button behaviour 
*/

// Change button appearance
function changeButtonText() {
  doge.innerHTML = "Woof!";
}

function showIcon() {
  doge.innerHTML = "<img src='doggo.png'>";
}

function hideIcon() {
  changeButtonText();
}

// Show and hide picture each time button is clicked
function toggleDogPicture() {
  if (dogpic.style.display == null || dogpic.style.display == "none") {
    // Calculate a different position and size for the image each time
    let top = Math.floor(Math.random() * Math.floor(60)) + "%";
    let left = Math.floor(Math.random() * Math.floor(60)) + "% ";
    let width = Math.floor(Math.random() * Math.floor(100)) + "%";
    // Set the calculated properties
    dogpic.style.top = top;
    dogpic.style.left = left;
    dogpic.style.width = width;
    dogpic.style.display = "block";
  } else {
    dogpic.style.display = "none";
  }
}

/*
Then come the cats
*/

/*function rain() {
  create cats
  hide main
  set background
  animate cats
  play audio
  
  after 10 seconds
  stop audio
  zap cats
  remove background
  show main
}*/


// Set and remove background image
function setBackground() {
  body.style.backgroundImage = "url('naynback9_shop_preview.png')";
}

function removeBackground() {
  body.style.backgroundImage = "none";
}



/*
Create a cat, place it at a random position along the top border  and add it to the tree
*/
function createNyanCat() {
  // Create the cat
  let cat = document.createElement("img");
  cat.src = "nyancat.png";
  cat.style.position = "absolute";
  /*
  Randomize position along the top of the viewport, and also generate negative
  positions otherwise the bottom left never gets rain.
  Also move the image above the top as we want to hide it initially.
  */
  let left = Math.floor(parseInt(body.clientWidth) * Math.random());
  left *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  left = left + 'px';
  cat.style.left = left;
  cat.style.top = -60 + 'px';
  cat.style.transform = 'none';
  body.appendChild(cat);
  return cat;
}

function createLitterOfCats() {
  /* create a whole litter of cats */
  let numCats = Math.floor(Math.random() * 100) + 10;
  let allCats = [];
  console.log("Making " + numCats + " cats.");
  for (let i = 0; i < numCats; i++) {
    allCats[i] = createNyanCat();
  }
  return allCats;
}

// Let it rain cats
function rainNyanCats() {
  let allCats = createLitterOfCats();
  main.style.visibility = "hidden";
  dogpic.style.display = "none";
  setBackground();
  // audio.volume = 1;
  audio.play();
  animateCats(allCats);
  console.log('Before timeout: ' + new Date());
  window.setTimeout(function () {
    console.log('Entering timeout.')
    fadeAudio();
    zapCats(allCats);
    removeBackground();
    main.style.visibility = "visible";
    console.log('After timeout: ' + new Date());
  }, 10000);
  audio.pause;
}

function animateCats(allCats) {
  allCats.forEach(function (cat) {
    // calculate random angle
    let xTarget = Math.floor(Math.random() * parseInt(body.clientWidth));
    // calculate random speed
    let speed = (Math.random() * allCats.length) % 10 + 2;
    // console.log('xTarget: ' + xTarget);
    // console.log('speed: ' + speed);
    cat.style.transition = 'all ' + speed + 's ease-in ' + Math.floor(Math.random() * allCats.length / 10) + 's';
    cat.style.top = '100vh';
    cat.style.left = xTarget + 'px';
    cat.style.transform = 'rotateY(7200deg)';
  });
}

function zapCats(cats) {
  cats.forEach(function (cat) {
    cat.remove();
  });
}



function fadeAudio() {
  console.log('Inside fadeout: ' + new Date());

  setInterval(function () {
    if (audio.volume > 0.0) {
      console.log('Entering interval.');
      audio.volume -= 0.1;
      console.log(audio.volume);
    }
    // When volume at zero stop all the intervalling
    if (audio.volume <= 0.2) {
      clearInterval(fadeAudio);
      audio.volume = 0;
    }
  }, 100);
}