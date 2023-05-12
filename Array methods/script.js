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

const store = [
    {
        product:'laptop',
        value:1000,
        count:3
    }, {
        product:'desktop',
        value:2000,
        count:6
    }, {
        product:'Asus',
        value:4000,
        count:3
    }
]
const totalValue = store.reduce((acc,item)=> acc + item.value * item.count,0);
console.log(totalValue)