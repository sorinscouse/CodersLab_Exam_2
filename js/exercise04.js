//* **1. Searching for tag names:**
var el_sample_class = document.querySelectorAll('.sample_class');
//- cautarea tuturor elemntelor cu clasa "sample_clas"

function getTag(elements) {
  var res = [];
  elements.forEach(function(el) {
    res.push(el.tagName);
  });
  return res;
}
console.log(getTag(el_sample_class));






//* **2. Searching for class names:**
var el_sample_id = document.querySelector('#sample_id');
//Gasirea elementului cu id-ul "sample_id".


function getClass(element) {
  return Array.from(element.classList);
}
console.log(getClass(el_sample_id));






//* **3. Searching for text:**
var sample_class_2_lis = document.querySelectorAll('ul.sample_class_2 li');
//Cautarea tutror elementelor din elementul cu clasa "sample_class_2"

function getInnerText(elements) {
  var res = [];
  elements.forEach(function(el) {
    res.push(el.innerText);
  });
  return res;
}
console.log(getInnerText(sample_class_2_lis));






//* **4. Searching for link addresses:**
var all_links = document.querySelectorAll('a');
//Gasirea tuturor link-urilor

function getAddress(elements) {
  var res = [];
  elements.forEach(function(el) {
    res.push(el.getAttribute('href'));
  });
  return res;
}
console.log(getAddress(all_links));






//* **5. Searching for the child tags:**
var children = Array.from(document.querySelector('.sample_class_3').children);
//Gasirea tuturor copiilor al ementului cu clasa "sample_class_3"
getTag(children);

console.log(getTag(children));












