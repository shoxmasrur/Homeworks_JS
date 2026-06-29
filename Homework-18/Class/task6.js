class Hisob{
    #balance = 0
    constructor(name){
        this.name = name;
    }

    deposit(amount){
        if(amount<=0){
            return "siz kiritgan miqdor manfiy. Musbat son kiriting";
        }else{
            this.#balance +=amount;
            return "Muvaffaqiyatli"
        }
    }
    withdraw(amount){
        if(amount>this.#balance){
            return "hisobda mablag' yetarli emas"
        }else{
            this.#balance-=amount;
            console.log("Muvaffaqiyatli")
        }
    }
    getBalance(){
        return this.#balance
    }
}

const user = new Hisob("Shohruh");
console.log( user.deposit(40) )