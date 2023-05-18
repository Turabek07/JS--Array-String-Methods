                                    ///                         STRING METHODS                                   ///
              // CHARAT() METHOD //
// const str = 'Code Explained';
// console.log(str.charAt(0));

//              // INDEXoF() AND LASTiNDEXoF() METHODS //
// const s = 'The code undefined code code!';
// // string.indexOf(searchString,Position)
// // string.lastIndexOf(searchString,Position);
// console.log(s.indexOf('code'));
// console.log(s.lastIndexOf('code'));
// console.log(s.indexOf('code',5));//i am searching with position "5"
// console.log(s.lastIndexOf('code',24));//i am searching with position "24"
// console.log(s.indexOf(''));//with empty string it searches empty places from right to left
// console.log(s.lastIndexOf(''));//with empty string it searches empty places from left to right
// console.log(s.indexOf());//it searches "undefined" from right to left
// console.log(s.lastIndexOf());////it searches "undefined" from left to right


                 // SLICE() AND SUBSTRING() METHODS //

// const s = 'The morning is upon us';
   // sytnaxes
// //string.slice(indexStart);
// //string.substring(indexStart);
// //string.slice(indexStart,indexEnd);
// //string.substring(indexStart,indexEnd);

// console.log(s.slice(12));//get indexes from position "12" till end
// console.log(s.substring(12));//get indexes from position "12" till end
// console.log(s.slice(-11));//same result with positive get from "-11" till "-1"
// console.log(s.substring(-11));//not same when we have negative number "substring" change indexStart to zero and get from position "0" till end.
// console.log(s.slice(13,16));// it gets index from "13" position but not include "16";
// console.log(s.substring(13,16));//it gets index from "13" position but not include "16";
// console.log(s.slice(16,13));//it return empty string
// console.log(s.substring(16,13));//if "indexstart" is bigger than "endIndex" then they swapped 
// console.log(s.slice(-8,-4));//also we can work negative numbers
// console.log(s.substring(-8,-4));//both of numbers change to "0" it returns empty string
// console.log(s.slice(-8,4));//it returns empty string because indexstart postion is on the first than endindex position
// console.log(s.substring(-8,4));//first negative number change to zero 
// console.log(s.slice(8,-4));
// console.log(s.substring(8,-4));//first negative number change to zero than compare numbers if endIndex is less than indexStart than swapped their place
