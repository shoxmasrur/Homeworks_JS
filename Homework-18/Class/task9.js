class BankAccount{
    #balance = 0;


    set balance(amount){
        if(amount<=0){
            console.log( "musbat qiymat kiriting")
        }else{
            this.#balance = amount;
            console.log("muvoffaqiyatli")
        }
    }
}

const account = new BankAccount()
account.balance = 3000

