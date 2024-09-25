let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.claasList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = Scroollreveal ({
    distance: '40px',
    duration: 2500,
    reset: true

});

sr.reveal('.logo',{delay: 200, origin: 'left'});
sr.reveal('.navbar',{delay: 400, origin: 'top'});
sr.reveal('.menu-btn',{delay: 520, origin: 'right'});