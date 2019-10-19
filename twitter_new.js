function getUrl() {
    return window.location.href;
}

function addUrlInfoToSession(url) {
    sessionStorage.setItem('c24df9856f4a06331a6ae9d9393a79b6', url);
}

window.onload = function () {
    addUrlInfoToSession(getUrl());
}
