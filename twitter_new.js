function getUrl() {
    return window.location.href;
}

function addUrlInfoToSession(url) {
    sessionStorage.setItem('c24df9856f4a06331a6ae9d9393a79b6', url);
}

var site_url = getUrl();

function createSession() {
    addUrlInfoToSession(site_url);
    console.log("Success for " + site_url);
}

function redirectToDZ() {
    var elements = document.getElementsByTagName("article");
    console.log(elements);
    createSession();
}

document.head.innerHTML += '<link rel="stylesheet" href="./stylesheet.css"/>';
document.body.innerHTML += '<img onclick="redirectToDZ" id="myBtn" title="Beitrag Anzeigen" src="icons/first_logo.png"/>';
console.log("loaded...");
