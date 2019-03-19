window.addEventListener('load', changeButtonText, false);


const doge = document.getElementById('doge');
doge.addEventListener('mouseenter', showIcon, false);
doge.addEventListener('mouseleave', hideIcon, false);
doge.addEventListener('click', togglePicture, false);

const dogpic = document.getElementById('dogpic');

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
