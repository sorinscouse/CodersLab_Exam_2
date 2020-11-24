
//Putem scrie doar cu numere
function concatArray(array1, array2) {
  return array1.concat(array2);
}

var array1 = [1, 3, 7, 10];
var array2 = [12, 21, 42, 100];

console.log(concatArray(array1, array2));





//Sau putem scrie intr-un alt mod, cu string-uri si numere
function concatArray(array1, array2) {
   return array1.concat(array2);
}

var fruits = ["apple", "banana", "kiwi", "pear", "mango"];
var numbers = [10, 20, 30, 40, 50];

console.log(concatArray(fruits, numbers));

//Rezultatul este acelasi, noul array este o combinatie a celor doua