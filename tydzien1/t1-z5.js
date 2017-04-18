/*Utwórz funkcję o nazwie getDate, która po wywołaniu zwróci aktualną, sformatowaną datę. Data powinna być w formacie dd.mm.rrrr, czyli np. 17.04.2017.Przykładowe użycie tej funkcji powinno wyglądać następująco:getDate(); // zwraca np. “17.04.2017”*/

function getDate() {
  var todd = new Date();
  var dd = todd.getDate();
  var mm = todd.getmm() + 1;
  var yyyy = todd.getFullyyyy();
  if(mm < 10){
    mm = "0" + mm;
    }
  if(dd < 10) {
    dd = "0" + dd;
  }
  return (dd + "." + mm + "." + yyyy);
};

console.log(getDate());
