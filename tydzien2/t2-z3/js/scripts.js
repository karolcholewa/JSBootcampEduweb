(function () {

    var counter = document.getElementById("counter"),
        button = document.getElementById("button"),
        para = document.getElementById("para");
    var value = 10;

    function toZero(cbFunction) {

        if (value > 0) {
            countDown();
            setTimeout(function () {
                toZero(cbFunction)
            }, 1000);
        } else {
            cbFunction();
        }

    }

    //    function toZero(cbFunction) {
    //        
    //        if (value > 0) {
    //            countDown();
    //            setTimeout(toZero.bind(this, cbFunction), 1000);
    //        }
    //        else {
    //           cbFunction();
    //        }
    //
    //    }

    function countDown() {
        counter.textContent = value--;

    };

    button.addEventListener("click", function () {

        this.disabled = true;

        toZero(function () {
            //para.className = "";
            counter.textContent = "start";
            value = 10;
            button.disabled = false;
        });

    }, false);


})();
