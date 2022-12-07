const buttonRight = document.getElementById("next");
const buttonLeft = document.getElementById("prev");

buttonRight.onclick = function () {
    document.getElementById("scroll-wrapper").scrollLeft += 600;
};
buttonLeft.onclick = function () {
    document.getElementById("scroll-wrapper").scrollLeft -= 600;
};