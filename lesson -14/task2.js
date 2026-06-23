// class Mathhelper{
//     static PI = 3.14159;
//     static square(n){
//         return n*n;
//     }
// }
// console.log(Mathhelper.square(5))


// class MathUtills {
//     static add(a,b){
//         return a+b;
//     }
//     static substract(a,b){
//         return a-b
//     }
// }

// console.log(MathUtills.add(2,3))


// class Counter{
//     static #counter=0;
//     constructor(){
//         Counter.#counter++
//     }

//     static getCounter(){
//         return this.#counter;
//     };
// }

// new Counter()
// new Counter()
// new Counter()
// // console.log(Counter.getCounter())


// class StringUtils {
//     static capitalize(str){
//         return str[0].toUpperCase()+ str.slice(1)
//     }
//     static reverse(str){
//         return str.split("").reverse().join("")
//     }
//     static isPolindrom(str){
//         if (str=== str.split("").reverse().join("") ){
//             console.log("Polindrom")
//         }else{
//             console.log("Polindrom emas")
//         }
//     }
// }


// StringUtils.isPolindrom("salom") 


// class IdGenerator {
//     static #lastId = 0;
//     static Generator(){
//         IdGenerator.#lastId++;
//         const n = String(IdGenerator.#lastId).padStart(3,0);
//         return "ID-"+n
//     }
//     static reset(){
//         IdGenerator.#lastId = 0;
//     }

// }
// console.log( IdGenerator.Generator() )
// console.log( IdGenerator.Generator() )
// console.log( IdGenerator.Generator() )

