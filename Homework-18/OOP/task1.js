class Mashina {
    constructor(rusum, yil){
        this.brand = rusum;
        this.year = yil;
    }
    getInfo(){
        console.log(`${this.brand} rusumli mashina ${this.year} da ishlab chiqarilgan`);
    }
}

const mashina = new Mashina("Lasetti", 2022)
mashina.getInfo()


