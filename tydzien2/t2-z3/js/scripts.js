(function () {

    var counter = document.getElementById("counter"),
        button = document.getElementById("button");
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



    function toZero(cbFunction) {

        if (value > 0) {
            countDown();
            setTimeout(toZero.bind(this, cbFunction), 1000);
        } else {
            cbFunction();
        }

    }

    function countDown() {
        counter.textContent = value--;

    };


    button.addEventListener("click", function () {
        this.disabled = true;
        toZero();
    }, false);



    //    button.addEventListener("click", function () {
    //        this.disabled = true;
    //        toZero(function () {
    //            counter.textContent = "start";
    //            value = 10;
    //            button.disabled = false;
    //        });
    //         toZero();
    //    }, false);

    //    function toZero(){
    //        if (value > 0) {
    //            countDown();
    //            setTimeout(toZero, 1000);
    //        } else {
    //           reset();
    //        }
    //    }

    //   function reset(){
    //         
    //            counter.textContent = "start";
    //            value = 10;
    //            button.disabled = false;
    //        
    //    }


})();
