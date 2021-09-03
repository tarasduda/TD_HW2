// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.




// const findLongestWord = function(string) {
//     let arrIn = string.split(' ');
//     let LongestWord = '';

//     for (let everyWord in arrIn) {
//         if(LongestWord.length <arrIn[everyWord].length){
//             LongestWord = arrIn[everyWord];
//         }
//     }
//     return LongestWord;
//   };

 

//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'