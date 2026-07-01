class Tortburchak {
    constructor(eni, boyi){
        this.eni = eni;
        this.boyi = boyi;
    }

    set tomon (amount){
        if(amount<=0){
            "musbat qiymat kiriting:"
        }else{
            this.eni = amount;
        }
    }

    get yuza(){
        return this.eni  * this.boyi;
    }
}

const tortburchak = new Tortburchak(3,2);

tortburchak.tomon = 10;
console.log( tortburchak.Yuza );
