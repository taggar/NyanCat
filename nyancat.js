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
		// calculate a different position and size to display the image each
		// time
		let top = Math.floor(Math.random() * Math.floor(60)) + "%";
		let left = Math.floor(Math.random() * Math.floor(60)) + "% ";
		let width = Math.floor(Math.random() * Math.floor(100)) + "%";

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
	// randomize position along the top of the viewport
	let left = Math.floor(parseInt(body.clientWidth) * Math.random());
	// also generate negative positions otherwise the bottom left never gets
	// rain
	left *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	left = left + 'px';
	// and now create the cat
	let cat = document.createElement("img");
	cat.src = "nyancat.png";
	cat.classList.add("cat");
	cat.style.position = "absolute";
	cat.style.left = left;
	cat.style.top = -100 + 'px'; // image is 100px high and we want to hide
	// it to begin with
	body.appendChild(cat);
	console.log(left);
	return cat;
}

// Let it rain cats
function rainNyanCats() {
	let numCats = 50;
	let allCats = [];
	for (let i = 0; i < numCats; i++) {
		allCats[i] = createNyanCat();
	}
	main.style.display = "none";
	setBackground();
	audio.play();
	animateCats(allCats);
	setInterval(function() {
		if (audio.currentTime > 10) {
			audio.pause();
		}
	}, 1000);

	zapCats(allCats);
}

function animateCats(cats) {

	cats.forEach(function(cat) {
		cat.animate([
		// keyframes
		{
			transform : 'translateY(0px) translateX(0px)'
		}, {
			transform : 'translateY(100vh) translateX(100vw)'
		}, ], {
			// timing options
			duration : 1000,
			iterations : 9,
			delay : Math.random() * 5000
		});

	});
}

function zapCats(cats) {
	cats.forEach(function(cat) {
//		cat.remove();
	});
}
