const buttonRight = document.getElementById("next");
const buttonLeft = document.getElementById("prev");

buttonRight.onclick = function () {
    document.getElementById("scroll-wrapper").scrollLeft += 300;
};
buttonLeft.onclick = function () {
    document.getElementById("scroll-wrapper").scrollLeft -= 300;
};

function hamburger(){
    document.getElementById('nav-list').classList.toggle('side-menu')
}