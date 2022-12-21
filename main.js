function next_btn() {
    document.getElementById("scroll-wrapper").scrollLeft += 630;
};
 function prev_btn() {
    document.getElementById("scroll-wrapper").scrollLeft -= 630;
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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email==""){
        text="Please enter your email id";
        document.getElementById('email-error').innerHTML=text
        return false;
    }
    if(!email.match(mailformat)){
        text="Enter correct email id";
        document.getElementById('email-error').innerHTML=text
        return false;
    }
    let pass=document.getElementById("password").value;
    // const passLen=pass.lenght;
    
    if(pass==""){
        text="Please enter your password";
        document.getElementById('password-error').innerHTML=text
        return false;
    }
    if(pass.length<8){
        text="Password length must be atleast 8 characters";
        document.getElementById('password-error').innerHTML=text
        return false;
    }
    openPopup();
    // cleaninputField();
    return false;
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
    window.scrollTo({top:0 , behavior:"smooth"})
}
// let scrollButton=document.getElementById("scroll-top")
// window.onscroll = function() {scrollButton()}
// function scrollButton(){
//     // if(document.body.scrollTop>2000 ||document.documentElement.scrollTop > 2000){
//     //     scrollButton.style.display="block"
//     // }
//     // else{
//         scrollButton.style.display="none"
//     // }
// }
function contectUs(){
    document.getElementById("contectUs").scrollIntoView({behavior:"smooth"});
}
function openPopup(){
    document.getElementById("submit-form").style.display = "block";
}
function closePopup(){
    document.getElementById("submit-form").style.display = "none";
}
