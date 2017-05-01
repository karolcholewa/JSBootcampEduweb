(function () {

        function debounce(fn, time) {
            
            var timer = null;
            
            return function(){
                
                clearTimeout(timer);
                timer = setTimeout(function(){
                    fn();
                }, time)
               
        }
        };

            var handleScroll = debounce(function () {
                console.log("scroluje");
            }, 500);
    
            var handleResize = debounce(function(){
                console.log("zmieniam rozmiar");
            }, 250);

            window.addEventListener("scroll", handleScroll, false);
            window.addEventListener("resize", handleResize, false);

        })();
