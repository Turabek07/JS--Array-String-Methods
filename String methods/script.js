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


            // SPLIT() MEHTOD //

//SYNTAXES
//string.split()
//string.split(separator)
//string.split(separator,limit)

// const string = 'The morning is upon us';
// const arr0 = string.split()//[ 'The morning is upon us' ]
// const arr1 = string.split(' ')//[ 'The', 'morning', 'is', 'upon', 'us' ]
// const arr2 = string.split('')[
//     'T', 'h', 'e', ' ', 'm',
//     'o', 'r', 'n', 'i', 'n',
//     'g', ' ', 'i', 's', ' ',
//     'u', 'p', 'o', 'n', ' ',
//     'u', 's'
//   ]
// const arr3 = string.split('o')//[ 'The m', 'rning is up', 'n us' ]
// const arr5 = string.split('o',2)//[ 'The m', 'rning is up' ]
// const arr6 = string.split('o',0)// [] empty array
// console.log(arr0);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr5);
// console.log(arr6);

                // INCLUDES() METHOD

//SYNTAXES 
//string.includes(searchString)
//string.includes(searchString,position)
// const str = 'The quick brown fox running very fast than rabbit';
// console.log(str.includes('rabbit'));//it returns true becuse it is checking this string is include or not
// console.log(str.includes('fox',0));//there start searching from position zero 

    
              // STARTSWITH() 
    //SYNTAXES 
// string.startsWith(searchString);
//string.startsWith(searchString,Position);
// it is sensetive

// const str = 'Cats are the best ';
// console.log(str.startsWith('Cate'));
// console.log(str.startsWith('Cats',5));

             //ENDSWITH() METHOD
    // SYNTAXES
// string.endsWith(searchString);
// string.endsWith(searchString,length)

// const str = 'The cats are best!'
// console.log(str.endsWith('best'));
// console.log(str.endsWith('best',17));


            // CONCAT() METHOD //

// SYNTAXES
// str1.concat(str2)
//str1.concat(str2,str3,...,str5)

// const str = 'hello';
// const str1 = 'World';
// const str3 = 'I am';
// const str4 = 'Turabek Yusubov'
//  console.log(str.concat(' ',str1,',',str3,' ',str4));

            // REPEAT() METHOD

// SYNTAXES
// string.repeat(count)

// const str = 'abc'
// console.log(str.repeat(0));//empty string
// console.log(str.repeat(1));
// console.log(str.repeat(3.5));// method will change integer this count number "3.5";
// console.log(str.repeat(-1));// it returns 'Range error'
// console.log(str.repeat(1/0));//it returns "Range Error"


                    // TRIMSTART()  -  TRIM()  -  TRIMEND()  //
//SYNTAXES 
// string.trimStart()    -   string.trim()   -   string.trimEnd()  //

// const s = '         Hello world       '
// const str = s.trimStart()// remove space from start till index position
// const str1 = s.trim()// remove space from both sides
// const str2 = s.trimEnd()//remove space from end 
// console.log(str);
// console.log(str1);
// console.log(str2);


                   // padStart()   --  padEnd()  //

                                    // SYNTAXES 

//          string.padStart(targetlength)    -----       string.padEnd(targetlength)    ///
//          string.padStart(targetlength,padstring)  ----    string.padEnd(targetlength,padstring)        ///

// const s = 'abc';
// const m = s.padStart(10)// _ _ _ _ _ _ _ abc <---result will appear
// console.log(s.padStart(10,'tim'))// "timtimtabc" <-- it returns like this
// console.log(s.padStart(10,'123456789'))// "1234567abc"-- it returns like this
// console.log(s.padEnd(10));//"abc_ _ _ _ _ _ _" it returns with 7 space 
// console.log(s.padEnd(10,'foo'));// "abcfoofoof" <-- it returns
// console.log(s.padEnd(10,'123456789'));// "abc1234567" <-- it returns 


               // LOCALCOMPARE()  //
// SYNTAXES //
//referenceString.localCompare(compareString);
//referenceString.localCompare(compareString, locales);
//referenceString.localCompare(compareString, locales , options)

           // SEARCH() METHOD //
// SYNTAXES //
//string.search(regexp)
// let text = 'The rain in SPAIN stays mainly in the plain';
// console.log(text.search('ain'));
// console.log(text.search(/ain/));
// console.log(text.search(/AIN/));
// console.log(text.search(/AIN/i));// at the moment it searches both case on the lowerCase and upperCase and returns first find item position
// console.log(text.search(/w/));//if item will not find it returns "-1" all the time


           // MATCH() //
    // SYNTAXES //
// string.match(regexp)

// let text = 'The rain in SPAIN stays mainly in the plain';
// console.log(text.match('ain'));//hte uotput --> [
// //     'ain',
// //     index: 5,
// //     input: 'The rain in SPAIN stays mainly in the plain',
// //     groups: undefined
// //   ]

// console.log(text.match(/ain/)); // sme result as "search()" method
// console.log(text.match(/ain/g));//it returns how many "comparestring" available inside of string
// console.log(text.match(/ain/gi));//it returns how many "comparestring" available inside of string but both cases lowerCase and UpperCase
// console.log(text.match(/w/));// if method failed it returns "null"
