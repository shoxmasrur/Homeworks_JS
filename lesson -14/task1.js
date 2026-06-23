// class Oquvchi {
//     constructor(ism, sinf, baholari){
//         this.ism = ism;
//         this.sinf = sinf;
//         this.baholar= baholari;
//     }

//     bahoQosh(baho){
//         this.baholar.push(baho)
//     };

//     getOrtacha(){
//         let ortacha = this.baholar.reduce((acc,curr)=>acc+curr);
//         return (ortacha/this.baholar.length).toFixed(2);
//     };

//     getInfo(){
//         console.log(this.ism +" "+this.sinf + "-sinf o'rtacha: " + this.getOrtacha())
//     }
// }
// class Alochi extends Oquvchi{
//     constructor(ism, sinf, baholari, stipendiya){
//         super(ism, sinf, baholari);
//         this.stipendiya = stipendiya
//     };

//     getInfo(){
//         super.getInfo()
//         console.log("stipendiaya: " + this.stipendiya)
//     };

//      getStipendiya(){
//         console.log(this.ism + "ning stipendiyasi " + this.stipendiya + " som")
//     };

// }
// const alochi1 = new Alochi("Aziz", 10, [5,4,5], 3000 )
// console.log(alochi1.getOrtacha() )
// alochi1.bahoQosh(5)
// console.log(alochi1.getOrtacha() )
// alochi1.getInfo()
// alochi1.getStipendiya()



// class BankAccount {
//     #balance =0;

//     deposit(amount){
//         this.#balance+=amount;
//     }
//     getBalance(){
//         return this.#balance
//     }
// }
// const account = new BankAccount();
// account.deposit(200)
// console.log(account.getBalance())

class UserProfile {
    #email;
    constructor(name, email){
        this.name = name;
        this.#email = email;
    }

    setEmail(){
      if(!this.#email.includes("@") ){
        throw new Error("email noto'g'ri")
      }else{
         console.log("Email to'g'ri")
      }
    }

}

const user =  new UserProfile ("Aziz", "Azizcom.ru");

try{
    user.setEmail()
}catch(err){
    console.log(err.message)
}