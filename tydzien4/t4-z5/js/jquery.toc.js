// Tutaj stwórz kod całego pluginu

(function ($) {
    'use strict';

    $.fn.toc = function (heading) {

        var links,
            list,
            hX = $(heading);
        
        $(".container").prepend("<div class='toc'><h2>Spis Treści</h2><ol></ol></div");
        
        list = $("ol");
        
        this.each(function (index) {
            $(this).find(hX).attr({
                "id": index
            });
            
            list.append("<li><a>" + $(hX[index]).text() + "</a></li>");
            
            links = $("a");
            
            $(links[index]).attr("href", "#" + index);
            
        });
        
    };

}(jQuery));

