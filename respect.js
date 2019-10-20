/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: 
*/

// user data

// GET
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
var url = findGetParameter("url");
var email = findGetParameter("email");
var name = findGetParameter("name");

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
var date = new Date();
textareaf.innerText = "Dieser Post stammt von Twitter. Letzer Zugriff am " + date + ". Dieser Beitrag ist meiner Ansicht nach volksverhetzend und sollte strafrechtich verfolgt werden." ;

// image
window.imgf = document.querySelectorAll("input[type=file]");
imgf = imgf[0];
imgf.click();

// scroll to
window.scrollObj = document.getElementsByClassName("form-group required");
console.log(scrollObj);
scrollObj = scrollObj[5];

$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $(scrollObj).offset().top
    }, 'slow');
});