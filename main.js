/*
* <re:respect>
* Jugend hackt
* Autoren: Anton, Manolo, Björn, Felix 
* TODO: 
*/

button = function() {
    return '<div aria-label=\"Antworten\" role=\"button\" data-focusable=\"true\" tabindex=\"0\" class=\"css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr\" data-testid=\"reply\">' +
        '       <div dir=\"ltr\" class=\"css-901oao r-1awozwy r-111h2gw r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0\">' +
        '           <div class=\"css-1dbjc4n r-xoduu5\">' +
        '                   <div class=\"css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg\">' +
        '                   </div>' +
        '                   <!--svg viewBox=\"0 0 24 24\" class=\"r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue\"-->' +
        '                   </div>' +
        '           </div>' +
        '       </div>';
}

function addChild(doc, parent, child, childText, attributes) {
    if (typeof child == "string") {
        childNode = doc.createElement(child);
    } else {
        childNode = child;
    }
    if (typeof childText == "string") {
        childTextNode = doc.createTextNode(childText);
        childNode.appendChild(childTextNode);
    }
    if (attributes) {
        for (var att in attributes) {
            childNode.setAttribute(att,attributes[att]);
        }
    }
    parent.appendChild(childNode);
    return childNode;
}

function placeButtonOnMainArticle() {
    console.log("run main.js...");


    elements = document.getElementsByClassName("r-a2tzq0");
    console.log(elements[0]);
    addChild(document, elements[0], 'div', '')
    //elements[0].appendChild();

    console.log("Placed Button on Main article.");
}

function placeButtonOnAnswer() {

    for (var i = 0; i <= elements.length; i++) {
        console.log(i);

        //elements[i].innerHTML = '<p style="color: red;">Hiii!</p>';
    }
}

document.onload = placeButtons();

/*
*
*  class="css-1dbjc4n r-1j3t67a"
*
* r-a2tzq0 => First
* r-1mdbhws => Kommentare only
*
**/