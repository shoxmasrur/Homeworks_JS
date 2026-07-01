function bankAccount(){
    let balance =0;

    return {
        deposit(amount){
            if(amount<0){
                console.log("musbat son kiriting")
            }else{
                balance+=amount;
            }
        },
        withdraw(amount){
            if(amount>balance){
                console.log("hisobda mablag' yetarli emas")
            }else{
                balance-=amount;
            }
        },
        getBalance(){
            return balance;
        }
    }
}

const account1 = bankAccount();
account1.deposit(300);
console.log(account1.getBalance())
account1.withdraw(120)
console.log(account1.getBalance())