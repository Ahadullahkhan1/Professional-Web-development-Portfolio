document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        preloader.classList.add("hide");
        mainContent.style.display = "block";
    }, 1500);
});
let menuBtn = document.getElementById('menu-btn');
let navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});


var tl = gsap.timeline({ repeatDelay: 1 });
tl.from('.home-content-left h1', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out',
});
tl.from('.home-content-left h3', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out',
});
tl.from('.home-content-left p', {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: 'power2.out',
});
tl.from('.home-content-right img', {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: 'power2.out',
});
tl.from('.home-content-left a', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power2.out',
});