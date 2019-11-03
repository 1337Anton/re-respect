/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: 
*/


// GET DATA

// GET IP
var api_data;
function getUserIpAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipapi.co/json/', true);

    // If specified, responseType must be empty string or "text"
    xhr.responseType = 'text';

    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                var api_data = JSON.parse(xhr.responseText);
                console.log(api_data + " 0");
            }
        } else {
            console.log("Fehler beim Laden relevanter Informationen: " + xhr.status);
        }
    };

    xhr.send(null);
}
getUserIpAPI();

// GET URL variables
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

// define these variables
var url = findGetParameter("url");
var email = findGetParameter("email");
var name = findGetParameter("name");


// GET AND IDENTIFY FORM ITEMS

// email field
window.emailf = document.querySelectorAll("input[type=email]");
emailf = emailf[0];
emailf.value = email;

// text fields
window.textfs = document.querySelectorAll("input[type=text]");

// full name
namef = textfs[0];
namef.value = name;

// title
titlef = textfs[2];
titlef.value = "Volksverhetzung auf Twitter";

// url
urlf = textfs[3];
urlf.value = url;

// text area
window.textareaf = document.getElementsByClassName("redactor-editor redactor-linebreaks");
textareaf = textareaf[0];
textareaf.click();
var date = new Date();
textareaf.innerText = "Dieser Post stammt von Twitter. Letzer Zugriff am " + date + ". Dieser Beitrag ist meiner Ansicht nach volksverhetzend und sollte strafrechtich verfolgt werden.";

// image
window.imgf = document.querySelectorAll("input[type=file]");
imgf = imgf[0];
imgf.click();

// accept policy
window.scrollObj = document.getElementsByClassName("form-group required");
scrollObj = scrollObj[5];

// scroll to policy on page load
$(document).ready(function () {
    $('html, body').animate({
        scrollTop: $(scrollObj).offset().top
    }, 'slow');
});
