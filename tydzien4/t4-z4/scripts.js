(function ($) {
    "use strict";

    var DATA_URL = "http://code.eduweb.pl/bootcamp/users/",
        btn = $("#btn"),
        page = $("#container");

    function showUsers(jsonData) {

        var list = $("<ul>");

        $.each(jsonData, function (object, value) {


            list.append("<li><p>Name: " + value.name + "</p><p>Username: " + value.username + "</p><p>Email: " + "<a href='mailto:" + value.email + "'>" + value.email + "</a></p><p>Phone: " + value.phone + "</p></li>");

        });

        list.appendTo("#container");
    };

    btn.on("click", function () {

        $.getJSON(DATA_URL)

            .done(function (data) {

                showUsers(data);


            })

            .fail(function () {
                $("#container").append("<ul class='error'><li>Wystąpił błąd przy pobieraniu danych z serwera.</li></ul>");
            });

    });


}(jQuery))
