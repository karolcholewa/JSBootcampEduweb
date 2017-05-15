/*jslint browser: true*/
/*global $, jQuery, alert */

(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        $.prototype.myClass = function () {
            console.log(this);
            return this.addClass("myClass");

        };

        //1.
        $("div.grid.grid-12").myClass();

        //2.
        $(".nav a[href^='http']").myClass();

        //3.
        //$("input:radio, input:checkbox").not(":checked").myClass();
        //lub
        $("input[type=radio], input[type=checkbox]").not(":checked").myClass();



        //4.
        $("div#text p:empty").first().text("was empty").myClass();

        //5.
        $(".pagination-item:not(span)").myClass();

    });



}(jQuery));
