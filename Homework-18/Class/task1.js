class Talaba{
    constructor(ism, yosh){
        this.name = ism;
        this.age = yosh
    }
    malumot(){
        return `${this.name}, ${this.age} yoshda`
    }
}

const talaba =  new Talaba("Aziz", 32)
console.log(talaba.malumot())