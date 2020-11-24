var btns = document.querySelectorAll('button');
var container = document.getElementById('container');
btns.forEach(function(el) {
  el.addEventListener('click', function() {
    container.innerText = this.dataset.text;
  });
});


/*Pentru toate butoanele de pe site, am adaugat un eveniment, care, dupa apasarea butonului, apare textul din "data-text", adica:
Butonul 1 - "Tekst do guzika 1"
Butonul 2 - "Tekst do guzika 2"
.
.
.
.
.
.
.
Butonul 20 - "Tekst do guzika 20"*/
