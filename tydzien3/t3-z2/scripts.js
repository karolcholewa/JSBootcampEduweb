(function () {
    
    

    var Toggler = function (selector) {

        //sprawdzam czy klasa zostala wywolana ze slowem 'new'. Jezeli nie 
        if (!(this instanceof Toggler)) {
            return new Togger(selector);
        }

        this._selector = document.querySelector(selector);
        Toggler.prototype.getElem = function () {
            return this._selector;
        };

        Toggler.prototype.show = function () {

            this.getElem().className = "";
        };

        Toggler.prototype.hide = function () {

            this.getElem().className = "hidden";
        }

    }
    
    var elem = new Toggler("#section");
    var button = document.querySelector("#button");

    //elem.hide();

    button.addEventListener("click", function () {
        if (window.getComputedStyle(elem.getElem()).display == "none") {

            elem.show();
            button.dataset.hide = "Hide";
            button.textContent = button.dataset.hide;
        } else {
            elem.hide();
            button.dataset.show = "Show";
            button.textContent = button.dataset.show;

        }

    }, false);


})();
