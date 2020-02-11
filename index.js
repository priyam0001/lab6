
window.addEventListener('keydown',playSound);

function playSound(e) {
    console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

const keys = document.querySelector(`div[data-keycode="${e.keyCode}"]`);

keys.classList.add('press');
audio.currentTime = 0;
audio.play();

const elements = [...document.querySelectorAll('.sound')];
elements.forEach(element => element.addEventListener('transitionend', removeTransition));

function removeTransition() {
    keys.classList.remove('press');
}
}



// document.addEventListener('click', playSound);  