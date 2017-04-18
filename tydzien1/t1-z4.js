/*Stwórz funkcję o nazwie sum, która będzie przyjmowała jeden parametr, którym będzie tablica z liczbami. Funkcja ta powinna zsumować wszystkie liczby z przekazanej tablicy, a następnie zwrócić wynik takiej operacji.Przykładowe jej użycie powinno wyglądać tak:sum([1, 10, 5, 4]); // zwraca wartość 20*/

function sum(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
  return sum; 
}

console.log(sum([22,10,5,4]));

