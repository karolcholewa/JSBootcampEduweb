/*Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę. Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.Przykładowe użycie tej funkcji powinno wyglądać następująco:getDate(); // zwraca np. “17.04.2017”*/
(function() {
  
    function getDate() {

      var today = new Date(); //create a new object from a Date constructor so all the methods are available to use
      var dd = today.getDate(); //The getDate() method returns the day of the month for the specified date according to local time.
      var mm = today.getMonth() + 1; //The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
      var yyyy = today.getFullYear();//The getFullYear() method returns the year of the specified date according to local time.

      if(mm < 10){
        mm = "0" + mm;
        }
      if(dd < 10) {
        dd = "0" + dd;
      }

      return (dd + "." + mm + "." + yyyy);

    };

    console.log(getDate());
})();
