{
    (function () {

        "use strict";

        var button = document.querySelector("#button"),
            output = document.querySelector("#data"),
            API_URL = "http://code.eduweb.pl/bootcamp/json/",
            result = "";


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

            //ta funkcja wykona sie tylko jak jest problem z serwerem; brak neta, brak pradu

            xmlhttp.onerror = function () {

                failure(new Error("Wystapil blad połączenia"));

            };

            //na koniec wysylamy zapytanie
            xmlhttp.send();

        };



        function showData(data) {

            data.forEach(function (obj) {

                let {

                    name,
                    username: username,
                    email,
                    address: {
                        geo: [lat, lon]
                    },
                    website,
                    company: {
                        name: companyName
                    }
                } = obj || {};

                let template = `

                                    Imie: ${name}
                                    Username: ${username} 
                                    Email: <a href="mailto:${email}">Wyślij email</a>
                                    Lokalizacja: <a href="http://bing.com/maps/default.aspx?cp=${lat}~${lon}">Pokaż na mapie</a>
                                    WWW: <a href="http://${website}">Odwiedź stronę</a>
                                    Firma: ${companyName}`;

                output.innerHTML += template;

            })
        }



        button.addEventListener("click", function (e) {

            //function(url, success, failure){};

            getJSON(API_URL, function (data) {

                showData(data);

            }, function (err) {

                console.log(err.message);

            });
        }, false);


    }());
};
