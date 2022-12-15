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
function validateForm(){
    let name=document.getElementById("name").value;
    if(name==""){
        text="Please enter your name";
        document.getElementById('name-error').innerHTML=text
        return false;
    }
    else{
        text="";
        document.getElementById('name-error').innerHTML=text
        return true
    }
    let email=document.getElementById("email").value;
    if(email==""){
        text="Please enter your email";
        document.getElementById('email-error').innerHTML=text
        return false;
    }
    let password=document.getElementById("password").value;
    if(password==""){
        text="Please enter your password";
        document.getElementById('password-error').innerHTML=text
        return false;
    }
}
function scrollTop(){
    document.documentElement.scrollTop = 0;
}
