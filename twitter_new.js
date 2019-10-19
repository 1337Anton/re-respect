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

<img onclick="redirectToDZ" id="myBtn" title="Melden" src="icons/first_logo.png"></img>