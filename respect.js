/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: 
*/

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

// user data
const email = sessionStorage.getItem("cb7b13818e85271c850a774ee3237f08");
const url = sessionStorage.getItem("c24df9856f4a06331a6ae9d9393a79b6");

// email field
window.emailf = document.querySelectorAll("input[type=email]");
emailf = emailf[0];
emailf.value = "mail@gmail.com";

// text fields
window.textfs = document.querySelectorAll("input[type=text]");

namef = textfs[0];
namef.value = "Enter full name here.";

titlef = textfs[2];
titlef.value = "Enter title here.";

urlf = textfs[3];
urlf.value = "url";

// text area
window.textareaf = document.getElementsByClassName("redactor-editor redactor-linebreaks");
textareaf = textareaf[0];
console.log(textareaf);
textareaf.click();
textareaf.innerText = "Text here";

pageScroll();

