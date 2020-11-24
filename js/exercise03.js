function bigestSumOfTwoElements(array) {
//Functia
    
   if (array.length === 0) {
      return false;
   }
// Daca lungimea array-ului este 0, intoarce fals.
    
   if (array.length === 1) {
      return array[0];
   }
// Daca lungimea array-ului este 1, intoarce valoarea proprie
    
   if (array.length > 1) {
      array.sort((a, b) => {
         return a - b;
      });
// Daca lungimea array-ului este mai mare decat 1, folosim array.sort pentru a sorta numerele in ordine crescatoare.
       
      return (array[array.length - 1] + array[array.length - 2]);
   }
}
//Intoarce suma celor mai mari numere din array.


console.log(bigestSumOfTwoElements([1,2,3,4])); // => 7

console.log(bigestSumOfTwoElements([])); // => false

console.log(bigestSumOfTwoElements([76])); // => 76

console.log(bigestSumOfTwoElements([23,45,17,12])); // => 68





























