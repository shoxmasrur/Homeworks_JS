class Users {
    static count = 0;
    constructor(){
        Users.count++;
    }
}

const user1 = new Users()
const user2 = new Users()
const user3 = new Users()
const user4 = new Users()

console.log( Users.count )

