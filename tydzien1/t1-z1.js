/*. Instrukcje warunkoweZa pomocą instrukcji warunkowej if (wraz z blokami else) lub switch, stwórz skrypt, który w konsoli (za pomocąconsole.log()) wyświetli cenę produktu, w zależności od liczby zakupionych przez klienta do tej pory produktów. Oczywiście wszystko to jest abstrakcyjne, więc musisz utworzyć zmienną, która będzie przechowywała liczbę zakupionych produktów, np. 100, a następnie zmienną z ceną jakiegoś fikcyjnego produktu, np. 50. Poniżej tych dwóch zmiennych utwórz blok instrukcji warunkowych, który ustali ostateczną cenę, w zależności od liczby zakupionych przez klienta produktów.Jeśli zatem klient ma już na koncie od 5 do 20 zakupionych produktów, to przyznaj zniżkę5%. Jeśli 21 do 50, to 10%, od 51 do 100 produktów daje zniżkę15%, a powyżej 100produktów zniżkę w wysokości 20%.Musisz zatem obliczyć ostateczną cenę produktu, a następnie wyświetlić w konsoli komunikat, np. “Podstawowa cena produktu to 20zł, po obniżce to 17zł”. Aby to przetestować, będziesz musiał zmieniać liczbę zakupionych przez klienta produktów w zmiennej, w której taką informację zapiszesz.*/

(function() {
  
  var price = 50; //cena bazowa za produkt
  var quantity = 33; //ilosc zakupionych produktow
  var discount = 0; //naliczony rabat w %
  var total; //całkowita cena po uwzględnieniu rabatu

  //za pomocą instrukcji if/else
  if(quantity >= 5 && quantity <= 20){
    discount = 5;
      }
  else if(quantity >= 21 && quantity <= 50){
    discount = 10;
       }
  else if(quantity >= 51 && quantity <= 100){
    discount = 20;
     }
  
  total = price - (price * (discount / 100));
    
   console.log("Podstawowa cena produktu to " + price + "zł, a po rabacie w wysokości " + discount + "% wynosi " + total + "zł");

  
//To samo za pomocą instrukcji switch
  switch (true) {
    case quantity >= 5 && quantity <= 20:
    discount = 5;
    break;
  case quantity >= 21 && quantity <= 50:
      discount = 10;
      
      break;

    case quantity >= 51 && quantity <= 100:
      discount = 20;
      
      break;

    default:
     console.log("Cena produktu to " + price + "zł.");

  };
  console.log("Podstawowa cena produktu to " + price + "zł, a po obniżce z " + discount + "% rabatu to " + (price  - (price * discount/100) +"zł.");
 
})();

