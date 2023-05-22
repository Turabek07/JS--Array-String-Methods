                                             //// forEach() Method //////
// const numbers = [1,2,3,4,5] ;
// let sum = 0;
// numbers.forEach(item =>{
//     sum += item
// })
// console.log(sum)


//arrow function
// numbers.forEach((item,index,arr)=>{
//     console.log(arr)
//   });



// const letters = ['a','b','c','a','c','b','e'];

// let count = {};
// letters.forEach(item=>{
//     if(count[item]){
//         count[item]++;
//     }else{
//         count[item] = 1;
//     }
// })
// console.log(count)

// function consoleItem(item,index,arr){  Call back function
//   console.log('a['+index+']='+ item)
// }

// const numbers = [1,2,3,4,5]
// let sum = 0;
// numbers.forEach(item=> {
//     sum+=item
// })
// console.log(sum)

// const letters = ['Alice','kylie','Joanna']
// letters.forEach(item=>{
//     console.log(`Hello ${item}`)
// })

// const animals = ['cat','dog','elephant','snake']
// animals.forEach(item=>{
//    console.log(item.length) 
// })                                           ///// MAP() method /////

// const numbers = [1,2,3,4,5];
// const numbersDouble = numbers.map(double);
// function double(value,index,arr){
//     return value * 3
// }
// console.log(numbersDouble)


// const products = [
//     {
//         name:'laptop',
//         price:1000,
//         count:4
//     },{
//         name:'desktop',
//         price:1500,
//         count:4
//     },{
//         name:'lamp',
//         price:100,
//         count:45
//     }
// ];
// const totalProducts = products.map(item => ({
//     name: item.name,
//    totalValue: item.price * item.count
// }))
// console.log(totalProducts)

// const str = ['1','2','3','4'];
// const numbers = str.map(Number)
// console.log(numbers); 

// const numbers = [1,2,3,4,5];

// const Solutionsqrt = numbers.map(item=>{
//     return item * item
// })
// console.log(Solutionsqrt)


// const letters = ['bear','lion','ananas','gorilla']
// const lettersLenght = letters.map(item =>{
//     return item.length
// } )
// console.log(lettersLenght);
// const numbers = [10,20,30,40,50];
// const discountPrice = numbers.map(item=>{
//     return item - (item / 10)
// }) 
// console.log(discountPrice)


                                                            // FILTER() METHODS//
//    const numbers = [1,2,3,4,5,6,7,8,9,10];
   
//    const evenNum = numbers.filter(isEven);
//    function isEven(value){
//     return value % 2 === 0 
//    }
//    console.log(evenNum)


// const person = [
//     {
//         name:'Florin',
//         age:34
//     },{
//         name:'Assas',
//         age:23
//     },{
//         name:'Flayer',
//         age:13
//     }
// ]
// const elderAge = person.filter(person => person.age >= 14);
// console.log(elderAge);
// const numbers = [1,2,3,3,2,1,4,5,6,3,4,5,6,7];
// const nums = numbers.filter((value,index,arr)=>{
//     return arr.indexOf(value)===index
// })
// console.log(nums)

// const number = [1,2,3,4,5,6,7,8,9];
// const evenNum = number.filter(item=>{
//     return item % 3 === 0
// })
// console.log(evenNum);

// const names = ['John','Ali','Johanna','KJulia'];
// const jLetters = names.filter(item => item[0] === 'J');
// console.log(jLetters);

// const products = [
//     {
//         name:'apple',
//         price:0.5
//     },
//     {
//         name:'banana',
//         price:1.5
//     },
//     {
//         name:'Ananas',
//         price:2.5
//     }
// ]
// const cheapProd = products.filter(item => item.price >= 2.0)
// console.log(cheapProd);
                                     // REDUCE METHODS //
// const numbers = [1,2,3,4,5,6,7];
// const total = numbers.reduce(sum);
// function sum(accumulator,value){
//     return accumulator + value;
// }
// console.log(total);

// const numbers = [23,1,2,3,100,4,5,9,10]
// const max = numbers.reduce(callback,-Infinity);
// function callback(accumulator,value){
//   if(accumulator > value){
//     return accumulator;
//   }else{
//     return value;
//   }
// } 
// console.log(max);

// const store = [
//     {
//         product:'laptop',
//         value:1000,
//         count:3
//     }, {
//         product:'desktop',
//         value:2000,
//         count:6
//     }, {
//         product:'Asus',
//         value:4000,
//         count:3
//     }
// ]
// const totalValue = store.reduce((acc,item)=> acc + item.value * item.count,0);
// console.log(totalValue)
                                 /// SLICE METHOD //
  
//    const numbers =[1,2,3,4,5]
// //    const num2 = numbers.slice(1,4)
// const num2 = numbers.slice(-5)
//    console.log(num2);  
//    console.log(numbers);


// const participants = ['Alice','Patrick','Malvina','Johanna'];
// const winners = participants.slice(0,3)
// console.log(winners);
                           //SPLICE METHOD //
    // const numbers = [1,2,3,4,5,6];
    // const deleted = numbers.splice(1,3)
    //const deleted = numbers.splice(1,3,6,7,8)
    // console.log(deleted);                       
                                   
                                // SORT METHOD //
    // const names = ['alice','citny','bear','emelia','anna']
    // names.sort()
    // console.log(names) 
    
    // const numbers = [12,25,83,1,3,5,64,9,7,4]
    // numbers.sort(comapreFunction)
    // console.log(numbers);

    // function comapreFunction(a,b){
    //     return a - b;
    // }

    // const store = [
    //         {
    //             product:'laptop',
    //             value:1000,
    //             count:3
    //         }, {
    //             product:'desktop',
    //             value:2000,
    //             count:6
    //         }, {
    //             product:'Asus',
    //             value:4000,
    //             count:3
    //         }
    //     ];
    //     store.sort((a,b)=>{
    //         return a.price - b.price
    //     })
    //     console.log(store);

                                       // CONCAT METHOD //
    //   const a = [1,2,3];
    //   const b = [4,5,6];
    //   const c = [7,8,9];
    //   const d = a.concat(b,c)
    //   const e = a.concat(1,2,d)
    //   console.log(d)   
    //   console.log(e);    
    
                                     // FILL METHOD //
    
//    const numbers = [1,2,3,4,5];
//    numbers.fill(0,2,4);
//    console.log(numbers);    
   
//    function fillArray(n){
//     return Array(n).fill(0).map((_,idx) => idx + 1)
//    }
//    console.log(fillArray(20));

                              // INCLUDES METHOD /

//    const fruits = ['orange','ananas','banana','apple'];
//    const c = fruits.includes('apple');
//    console.log(c);                           


                              //JOIN METHOD //
//    const countries = ['Uzbekistan','India','Afganistan'];
//    const res = countries.join('-');
//    console.log(res);                           

                             // REVERSE METHOD //
//    const numbers = [1,2,3,4,5];
// //    const newArr = numbers.concat().reverse();
//    const newArr = [...numbers].reverse();
//    console.log(newArr);
//    console.log(numbers);    

// const str = ['Coding is fun! '];
// const res = str
// .split('')
// .reverse()
// .join('');
// console.log(res);

                            // PUSH METHOD //
                                             
// const numbers =[1,2,3,4]
// numbers.push(5,6,7)
// console.log(numbers);

                          // POP METHOD
// const num = [1,2,3]
// const num1 = num.pop()
// console.log(num1);

                         // UNSHIFT METHOD //
// const num = [1,2,3,4]
// num.unshift(0)
// console.log(num);
 
                        // SHIFT METHOD //
// const num = [1,2,3];
// num.shift();
// console.log(num);

                      // INDEXOF METHOD //
//  const strings = ['Ali','Turabek','magdan','ganisher','Turabek'];
//  console.log(strings.indexOf('Turabek'))                     
//  console.log(strings.lastIndexOf('Turabek'));

                       // EVERY METHOD //
// const numbers =[1,2,3,4,5,6,7,8,-11]
// const res = numbers.every((item)=> item > 0)
// console.log(res);

// const personas = [
//     {
//         name:'Florin'
//     },
//     {
//         name:'Florin'
//     },
//     {
//         name:'Florin'
//     },
//     {
//         name:'Florin'
//     }
    
// ]
// const res = personas.every(person => person.name !== undefined);
// console.log(res); 


                            // SOME METHOD //
// const num = [1,2,3,4,5,6]
// const res = num.some(item => item > 7)
// console.log(res);

// const personas = [
//     {
//         name:'Florin',
//         age:17
//     },
//     {
//         name:'Florin',
//         age:13
//     },
//     {
//         name:'Florin',
//         age:12
//     },
//     {
//         name:'Florin',
//         age:10
//     }
// ]
// const res = personas.some(person => person.age > 18);
// console.log(res);

                      // FIND METHOD //
//   const personas = [
//     {
//         name:'Florin',
//         age:17
//     },
//     {
//         name:'Florin',
//         age:13
//     },
//     {
//         name:'Florin',
//         age:12
//     },
//     {
//         name:'Florin',
//         age:10
//     }
// ]     
// const res = personas.find(personas=> personas.name === 'Florin') ;
// console.log(res);    

                      // FINDINDEX METHOD //
// const numbers= [1,2,3,4,5,6,7];
// const res = numbers.findIndex(findThree);
// function findThree(value){
//     return value === 3;
// }
// console.log(res);

                 

                              // FROM METHOD //

// const str = '123456789';
// const res = Array.from(str,mapFn);
// function mapFn(z){
//     return Number(z)
// }
// console.log(str); 

// const numbers =[1,2,3,4,5,5,4,3,6,7,8];
// const res = Array.from(new Set(numbers));
// console.log(res)

                             // ISARRAY METHOD //
// const number = [1,2,3,4,'turabek'];
// const str = 'turabek';
// const num = 434;
// console.log(Array.isArray(number))
// console.log(Array.isArray(str));
// console.log(Array.isArray(num));


                             // FLAT METHOD //

// const arr = [1,[2,[3,[4,[5]]]]];
// const res = arr.flat(Infinity);
// console.log(res);


                                //  MY SOLUTIONS TO SOME QUESTIONS BASED ON ARRAY METHODS JS //

// const num = [1,2,3,4,5]
// let square = []
// num.forEach(function(value){
// const squares = value * value;
// square.push(squares)
// })
// console.log(square);


// const names = ['ali','hali','mali']
// names.forEach(function(value){
//     console.log(value +" "+ 'Assalomu Alaykum')
// })

// const products = [
//     {
//         name:'Laptop',
//         price:1200
//     },
//     {
//        name:'Phone',
//        price:3000 
//     },
//     {
//         name:'Earphone',
//         price:200
//     }
// ]
// let totalPrice = 0;
// products.forEach(function(value){
//     totalPrice+=value.price
// })
// console.log(totalPrice);

// const names = ['ali','hali','mali','kali'];
// names.forEach(function(string){
//     console.log(string.charAt(0).toUpperCase() + string.slice(1))
// })

// const num = [1,3,4,7,0,54,43,67,23,32]
// let MaxNumber = num[0]
// num.forEach(function(number){
//   if(number > MaxNumber){
//     MaxNumber = number
//   }
// })
// console.log('Maximum number is: ',MaxNumber);


// const students = [
//     {
//         name:'John',
//         score:29
//     },
//     {
//         name:'John',
//         score:45
//     },
//     {
//         name:'John',
//         score:76
//     },
//     {
//         name:'John',
//         score:80
//     },
//     {
//         name:'John',
//         score:56
//     },
//     {
//         name:'John',
//         score:43
//     },
// ]

// let totalScore = 0;
// let totalStudents = 0;

// students.forEach(function(student){
//     totalScore += student.score;
//     totalStudents++;
// })

// const averageScore = Math.floor(totalScore / totalStudents);
// console.log('Average Score is :',averageScore);


// const names = ['alids','hal','mali','kalids'];

// names.forEach(function(string,index){
//     if(string.length < 4){
//      names.splice(index,1)
//     }
// })
// console.log(names);


// const numbers = [2,43,5,6,8,23,56,10,56,76,4,5,75];
// let num = 0;
// numbers.forEach(function(number){
//     if(number > 10){
//         num++;
//     }
// })
// console.log(num);