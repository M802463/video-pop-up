var btn = document.querySelector('button');
var box = document.querySelector('.box');
var c_l = document.querySelector('.icon i');
var v = document.getElementById('myvideo');

btn.addEventListener('click', function () {
    box.style.display = "block";
});
c_l.addEventListener('click', (e) => {
    box.style.display = "none";
    if (v.muted) {
        v.muted = false;
    } else {
        v.muted = true;
    }

    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }
})