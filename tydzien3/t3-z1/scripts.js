//Dziedziczenie prototypowe: Polifil dla metody repeat dla konstruktora String()
//- rozszerzymy prototyp konstruktora String().
//- zawsze sprawdz czy metoda juz istnieje
//- nie nadpisuj prototypu

(function () {

    //sprawdzam czy metoda juz istnieje; jesli tak to nic nie robie;
    if (typeof String.prototype.echo === "function") return;

    //rozszerzamy prototyp - odwolujemy sie do konstruktora/klasy 
    //metoda powinna przyjmowac ilosc powtorzen stringu

    String.prototype.echo = function (num) {

        var output = "",
            myString = this.toString();

        for (var i = 0; i < num; i++) {

            output += myString;
        }

        return output;
    };

    console.log("skrypt sie laduje");



    //wlasciwy Polyfill

    /*
        if ( typeof String.prototype.repeat !== "function" ) return;
        String.prototype.repeat = function(num){
            
            var output = "";
            for (var i = 0; i < num; i ++) {
                output += this;
            }
            return output;
        };
    */
    
    /*Metoda alternatywna
    
    return (new Array(num + 1)).join(this.toString());
    
    */

})();
