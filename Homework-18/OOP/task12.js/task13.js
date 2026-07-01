// constructor function da sanash
// function Users(name, age){
//     this.name  = name;
//     this.age = age;
//     Users.count++;
// }
// Users.count = 0;
// user1 =  new Users("Aziz", 43)
// user2 =  new Users("Shohruh", 32)
// console.log(Users.count)


// factory function uchun


// let counter = 0
// function users(name, age){
//     counter++;
//     console.log(counter)
//     return {
//         name:name,
//         age: age
//     }
// }

// user1 =users("Aziz", 32);
// user2 = users("Shohruh", 24)
// console.log(user1)

// console.log(counter)



// class uchun

class Users {
    static counter = 0;
    constructor(name){
        this.name= name
        Users.counter++;
    }

}

user1 = new Users("aziz");
user2= new Users("shoh");
console.log(Users.counter)



