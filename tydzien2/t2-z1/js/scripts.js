(function () {

    var btn = document.querySelector("button");
    var div = document.querySelector("#container");
    console.log(btn.innerHTML);


    btn.addEventListener("click", function () {

        if (div.hasAttribute("class")) {
            div.removeAttribute("class");
            btn.innerHTML = "Hide"
        } else {
            div.setAttribute("class", "hide");
            btn.innerHTML = "Show";
        }

    }, false);

})();
