// function romanToInt(roman){
//     let num =0
//     const obj ={
//         "I": 1,
//         "V": 5,
//         "X":10,
//         "L":50,
//         "C":100
//     }
//     const arr = roman.split("")
//     for (let i=0; i<arr.length-1;i++){
//         if (arr.length>1){
//            if( obj[arr[i]]>=obj[arr[i+1]] ){
//                 num+=obj[ arr[i] ]
//            }else{
//                 num+=(obj[arr[i+1]]-obj[arr[i]])
//            }
//         }else{
//             num=obj[arr[i]]
//         }

//     }
//     return num;
// }

// console.log( romanToInt("LXXXVIII") )

// class BankAccount{
//     constructor(owner, balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     withdraw(amount){
//         if(this.balance<amount){
//             throw new Error("Balanceda mablag' yetarli emas")
//         }

//         this.balance-=amount
//         console.log("Muvaffaqiyatli");
//     }

// }

// const account = new BankAccount("shohruh", 3000)

// try{
//     account.withdraw(300)
// }catch(error){
//     console.error(error.message)
// }


// class Animal {
//     constructor(name, sound){
//         this.name = name;
//         this.sound = sound;
//         if(this.name === ""){
//             throw new Error("siz ism kiritmadingiz")
//         }
//     }
// }

// try{
//     const rabbit = new Animal("", "salom")
// }catch(err){
//     console.error(err.message)
// }

// class Shape {

//     areal(){
//         throw new Error("areal() implement qilinmagan" )
//     }
// }

// class Circle extends Shape {
//     areal(){
//         console.log("circle ")
//     }

// }

// class Rectangle extends Shape{

//  areal(){
//     console.log("Ractangle")
//  }

// }


// const shape = new Shape();

// try{
//     shape.areal()
// }catch(err){
//     console.log(err.message)
// }



// class ValidationError extends Error{
//     constructor(){
//         super(message),
//         this.name ="ValidationError"
//     }
// }

// class User {
//     constructor(email, age){
//         this.email = email;
//         this.age = age;
//     }

//     register(){
//         if (!this.email.includes("@") || this.age<18){
//             throw new Error("salom")
//         }
//     }
// }

// const user = new User("shaog", 23);
// try{
//     user.register(){
// }catch(err){
//     console.log(err)
    
// }


const obj = {
    sayHi(){
        console.log("salom")
    },

    sayBye(){
        console.log("xayr")
    }
};

class Person {

};

Object.assign(Person.prototype, obj)
new Person().sayHi()