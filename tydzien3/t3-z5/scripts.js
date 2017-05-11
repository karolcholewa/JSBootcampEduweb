function getPage() {

    'use strict';

    var output = document.createElement("div"),
        url = window.location.href,
        regex = /page=(\d+)/,
        pageId = regex.exec(url);

    //poniewaz pageId to tablica z dwoma elementami, to usuwam pierwszy element

    if (pageId) {
        pageId.shift();
        output.textContent = "ID strony to: " + pageId;

    } else {
        output.textContent = "Strona nie posiada ID numerycznego";

    }

    document.body.appendChild(output);

    if (pageId) {
        return parseInt(pageId, 10);
    } else {
        return null;
    }
}

var button = document.getElementById("button");
button.addEventListener("click", getPage);
