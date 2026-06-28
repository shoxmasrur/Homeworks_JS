class User{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    chageToString(){
        return JSON.stringify(this)
    }
}

const user = new User("Aziz", 32)
console.log( user.chageToString() )