/*
3. Funkcja konwertująca wartość na typ Boolean. 
Utwórz funkcję o nazwie toBoolean, która będzie przyjmowała jeden parametr. Po przekazaniu do niej wartości przy jej wywołaniu, wartość ta powinna zostać skonwertowana na typ Boolean, czyli na true lub false. Funkcja ta powinna tę wartość zwrócić.
Przykładowe jej użycie powinno wyglądać tak:
toBoolean(20); // zwraca wartość true
toBoolean(“”); // zwraca wartość false
*/

var toBoolean = function(arg){
  if(arg === undefined && arguments.length === 0) {
    console.log("Argument nie został podany.");
    }
 return arg = Boolean(arg);

} 
console.log(toBoolean());
console.log(toBoolean("prawda"));




