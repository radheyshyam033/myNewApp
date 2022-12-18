function next_btn() {
    document.getElementById("scroll-wrapper").scrollLeft += 624;
};
 function prev_btn() {
    document.getElementById("scroll-wrapper").scrollLeft -= 622;
};

function hamburger(){
    document.getElementById('nav-list').classList.toggle('side-menu')
}
function validateForm(){
    let name=document.getElementById("name").value;
    if(name==""){
        text="Please enter your name";
        document.getElementById('name-error').innerHTML=text;
        return false;
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
function cleanErrorMsg(){
    document.getElementById('name-error').innerHTML="";
    document.getElementById('email-error').innerHTML="";
    document.getElementById('password-error').innerHTML="";
    document.getElementById('f-email-error').innerHTML="";
}
function validateEmail(){
    let email=document.getElementById("footer-email").value;
    if(email==""){
        text="Please enter your email";
        document.getElementById('f-email-error').innerHTML=text
        return false;
    }
}
function scrollTopHeader(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function contectUs(){
    document.getElementById("contectUs").scrollIntoView();
}

