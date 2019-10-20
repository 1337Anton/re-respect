/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: 
*/



// user data
const email = sessionStorage.getItem("cb7b13818e85271c850a774ee3237f08");
const name = sessionStorage.getItem("13fde6d25118c268b8b6180c9983d68d");
const url = sessionStorage.getItem("c24df9856f4a06331a6ae9d9393a79b6");

// email field
window.emailf = document.querySelectorAll("input[type=email]");
emailf = emailf[0];
emailf.value = email;

// text fields
window.textfs = document.querySelectorAll("input[type=text]");

namef = textfs[0];
namef.value = name;

titlef = textfs[2];
titlef.value = "Volksverhetzung auf Twitter";

urlf = textfs[3];
urlf.value = url;

// text area
window.textareaf = document.getElementsByClassName("redactor-editor redactor-linebreaks");
textareaf = textareaf[0];
textareaf.click();
textareaf.innerText = "Text here";

// image
window.imgf = document.querySelectorAll("input[type=file]");
imgf = imgf[0];
imgf.click();

// scroll to
window.scrollObj = document.getElementsByClassName("form-group required");
console.log(scrollObj);
scrollObj = scrollObj[5];


$(document).ready(function() {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $(scrollObj).offset().top
    }, 'slow');
});
