function Users(name, age){
    this.name = name;
    this.age = age;
}

Users.prototype.salomlash=function(){
    console.log(`salom mening ismim ${this.name}`)
}

const user1 = new Users("Aziz", 32);
user1.salomlash()

const user2 = new Users("shohruh", 32);
user2.salomlash()