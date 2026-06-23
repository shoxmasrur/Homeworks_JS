// class BankAccount {
//     balance=0
//     constructor(name, balance){
//         this.name = name;
//         this.balance = balance;
//     }
//     getBalance(){
//         return this.balance;
//     }
    
//     deposit(amount){
//         this.balance +=amount;
//     }
//     withdraw(amount){
//         if (this.balance<amount){
//             console.log("Balance da mablag yetarli emas")
//         }else{
//             this.balance-=amount;
//             console.log("muvaffaqiyatli")
//         }
//     }
    
//      static exchangeBalance(user1, user2, amount){
//          if (user1.balance<amount){
//             console.log("Balance da mablag yetarli emas")
//         }else{
//             user1.withdraw(amount);
//             user2.deposit(amount);
//      }
// }
// }




// const user1 = new BankAccount("Ipateka", 3000);
// const user2 = new BankAccount("Ipateka", 3000);

// BankAccount.exchangeBalance(user1, user2, 500)
// console.log( user1.getBalance() );
// console.log( user2.getBalance() )

