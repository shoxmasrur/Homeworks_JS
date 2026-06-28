// factory function

function createUsers(name, age){
    return{
        name: name,
        age : age
    }
}
const user1 = createUsers("Aziz", 32);
const user2 = createUsers("Shohruh", 44)
console.log(user1)