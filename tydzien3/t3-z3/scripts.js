(function () {

    function fecz(url, success, failure) {

        //tworze nowa instancje obiektu z klasy XMLHttpRequest; obiekt dostaje wszystkie metody

        var xmlhttp = new XMLHttpRequest();


        //otwieram polaczenie. typ zapytania GET; metoda obiektu XMLHttpRequest.prototype

        xmlhttp.open("GET", url, true);

        //Po tym jak serwer odesle odpowiedz - ta funkcja sie wykona; onload. Nie wykona sie wylacznie gdy nie ma komunikacji z serwerem

        xmlhttp.onload = function () {

            if (xmlhttp.status === 200) {

                success(xmlhttp.responseText);

            } else {

                failure(new Error("Wystapil blad. Kod statusu HTTP to: " + xmlhttp.status));
            }


        };

        //ta funkcja wykona sie tylko jak jest problem z serwerm; brak neta, brak pradu

        xmlhttp.onerror = function () {

            failure(new Error("Wystapil blad połączenia"));

        };

        //na koniec wysylamy zapytanie
        xmlhttp.send();

    }

    var button = document.querySelector("#button"),
        output = document.querySelector("#data");

    button.addEventListener("click", function (e) {

        //function(url, success, failure){};

        fecz("http://code.eduweb.pl/bootcamp/users/", function (data) {

            console.log("Sukces");
            output.textContent = data;

        }, function (err) {

            console.log("Wystąpil błąd...");
            console.log(err.message);
        });
    }, false);

})();
