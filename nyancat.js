window.addEventListener('load', changeButtonText, false);
const body = document.getElementsByTagName('body')[0];
const main = document.getElementById('main');


const doge = document.getElementById('doge');
doge.addEventListener('mouseenter', showIcon, false);
doge.addEventListener('mouseleave', hideIcon, false);
doge.addEventListener('click', togglePicture, false);

const dogpic = document.getElementById('dogpic');
dogpic.addEventListener('click', rainNyanCats, false);

function changeButtonText() {
    doge.innerHTML = "Woof!";
}

function showIcon() {
    doge.innerHTML = "<img src='doggo.png'>";
}

function hideIcon() {
    doge.innerHTML = "Woof!";
}

function togglePicture() {

    if (dogpic.style.display == null || dogpic.style.display == "none") {
        let top = Math.floor(Math.random() * Math.floor(60)) + "%";
        let left = Math.floor(Math.random() * Math.floor(60)) + "% ";
        let width = Math.floor(Math.random() * Math.floor(100)) + "%";
        console.log(top + " " + left + " " + width);
        dogpic.style.top = top;
        dogpic.style.left = left;
        dogpic.style.width = width + 'px';
        dogpic.style.width = width;
        dogpic.style.display = "block";
    } else {
        dogpic.style.display = "none";
    }
}

function rainNyanCats() {
    console.log("rainNyanCats");
    setBackground();
    main.style.display = "none";

}

function createNyanCat() {
    // maybe later, we'll see
}

function setBackground() {
    body.style.backgroundImage = "url('naynback9_shop_preview.png')";
}

function removeBackground() {
    body.style.backgroundImage = "none";

}

