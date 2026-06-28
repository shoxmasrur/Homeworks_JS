const Users = function(name, age, address, gender){
    this.name = name;
    this.age = age;
    this.address = address;
    this.gender = gender;
}

const user1 = new Users("shohruh", 32, "Toshkent", "erkak");
const user2 = new Users("Aziz", 32, "Navoiy", "Erkak");
const user3 = new Users("Sattor", 33, "Buxoro", "erkak");
const user4 = new Users("Aziza", 14, "Toshkent", "ayol")

console.log(user1.name)
console.log(user2.age)

Users.prototype.getInfo = function(){
    console.log("salom mening ismim", this.name)
}

    user3.getInfo()
