(function () {

    "use strict";

    function getJSON(url, success, failure) {

        //tworze nowa instancje obiektu z klasy XMLHttpRequest; obiekt dostaje wszystkie metody

        var xmlhttp = new XMLHttpRequest();

        //otwieram polaczenie. typ zapytania GET; metoda obiektu XMLHttpRequest.prototype

        xmlhttp.open("GET", url, true);

        //ustawiam naglowek HTTP aby format pobranych danych byl JSON
        
        xmlhttp.setRequestHeader("Accept", "application/json");

        //ustawiam typ danych zwrotnych na JSON - to samo zrobilaby metoda JSON.parse
        
        xmlhttp.responseType = "json";

        //Po tym jak serwer odesle odpowiedz - ta funkcja sie wykona; onload. Nie wykona sie wylacznie gdy nie ma komunikacji z serwerem

        xmlhttp.onload = function () {

            if (xmlhttp.status === 200) {

                try {
                    //success(JSON.parse(xmlhttp.response));
                    success(xmlhttp.response);
                } catch (e) {
                    failure(e);
                }


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

        getJSON("http://code.eduweb.pl/bootcamp/users/", function (data) {


            console.log("Sukces");
            console.log(data);
            console.log(typeof data);
            output.textContent = JSON.stringify(data, null, 4);


        }, function (err) {

            console.log("Wystąpil błąd...");
            console.log(err.message);

        });
    }, false);

}());
