// objects to manipulate and accompanying event listeners
const audio = new Audio('nyancat.mp3');

// containers
window.addEventListener('load', changeButtonText, false);
const body = document.getElementsByTagName('body')[0];
const main = document.getElementById('main');

// the doge button
const doge = document.getElementById('doge');
doge.addEventListener('mouseenter', showIcon, false);
doge.addEventListener('mouseleave', hideIcon, false);
doge.addEventListener('click', togglePicture, false);

// the dog picture
const dogpic = document.getElementById('dogpic');
dogpic.addEventListener('click', rainNyanCats, false);

// Change button appearance
function changeButtonText() {
  doge.innerHTML = "Woof!";
}

function showIcon() {
  doge.innerHTML = "<img src='doggo.png'>";
}

function hideIcon() {
  doge.innerHTML = "Woof!";
}

// Show and hide picture each time button is clicked
function togglePicture() {
  if (dogpic.style.display == null || dogpic.style.display == "none") {
    // display the iamge at a different postion and size each timeout
    let top = Math.floor(Math.random() * Math.floor(60)) + "%";
    let left = Math.floor(Math.random() * Math.floor(60)) + "% ";
    let width = Math.floor(Math.random() * Math.floor(100)) + "%";
    //console.log(top + " " + left + " " + width);
    dogpic.style.top = top;
    dogpic.style.left = left;
    dogpic.style.width = width;
    dogpic.style.display = "block";
  } else {
    dogpic.style.display = "none";
  }
}



// set and remove background image
function setBackground() {
  body.style.backgroundImage = "url('naynback9_shop_preview.png')";
}

function removeBackground() {
  body.style.backgroundImage = "none";
}

// create a cat and add it to the tree
function createNyanCat() {
  // randomize position along the togglePicture// also gebnerate negative positions oterwiz=se the bottom left never gets rain
    let left = Math.floor(parseInt(body.clientWidth) * Math.random());
  left *=  Math.floor(Math.random()*2) == 1 ? 1 : -1;
  left = left + 'px';
  let cat = document.createElement("img");
  cat.setAttribute("src", "nyancat.png");
  cat.classList.add("cat");
  cat.style.position = "absolute";
  cat.style.left = left;
  cat.style.top = -100 + 'px';
  body.appendChild(cat);
  console.log(left);
  return cat;
}

  // Let it rain cats
  function rainNyanCats() {
  audio.play();
    let numCats = 50;
    let allCats = [];
    for (let i = 0; i < numCats; i++) {
      allCats[i] = createNyanCat();
    }
    setBackground();
    main.style.display = "none";
    setInterval(animateCats(allCats), 1000);
  }

  function animateCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        cats[i].animate([
          // keyframes
          {
            transform: 'translateY(0px) translateX(0px)'
          },
          {
            transform: 'translateY(100vh) translateX(100vw)'
          },
        ], {
          // timing options
          duration: 10000,
          iterations: Infinity,
          delay: i * 500
        });
      };
                  }
