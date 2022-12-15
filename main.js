function next_btn() {
    document.getElementById("scroll-wrapper").scrollLeft += 470;
};
 function prev_btn() {
    document.getElementById("scroll-wrapper").scrollLeft -= 470;
};

function mob_next_btn() {
    document.getElementById("scroll-wrapper").scrollLeft += 320;
};
 function mob_prev_btn() {
    document.getElementById("scroll-wrapper").scrollLeft -= 320;
};


function hamburger(){
    document.getElementById('nav-list').classList.toggle('side-menu')
}