document.addEventListener('DOMContentLoaded', function () {
//Folosim evenimentul DOMContentLoaded
    
   var button_1 = document.querySelector('#button-1');
   var button_2 = document.querySelector('#button-2');
   var button_3 = document.querySelector('#button-3');
   var list = document.querySelector('#shopping-list');
//Selectam butoanele si lista

    
    
    
   button_1.addEventListener('click', function () {

      var newElement = document.createElement('li');

      newElement.innerText = "Bread";

      list.appendChild(newElement);

   });
//Dupa ce apasam pe primul buton, un nou produs - "Bread" a fost adaugat in lista
    
    


   button_2.addEventListener('click', function () {

      var lastChild = list.lastElementChild;

      lastChild.parentElement.removeChild(lastChild);

   });
//Dupa ce apasam cel de-al doilea buton, ultimul element a fost eliminat din lista.


    
    
   button_3.addEventListener('click', function () {

      if (list.children.length > 1) {

         var newCloneElement = list.children[1].cloneNode(true);

         list.appendChild(newCloneElement);

      } else {
//Dupa apasarea celui de-al treilea buton, un nou produs a fost adaugat la sfarsitul listei, care este clona celui de-al doilea produs, adica "Flour".
          
      }

   });

});