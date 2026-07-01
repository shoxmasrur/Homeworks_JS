class Figura{
    constructor(){
        if(new.target===Figura){
            throw new Error("bu classdan object olib bo'lmaydi")
        }
        if(this.yuza===undefined)
            throw new Error("yuza methodi bolishi kerak")
    }
}   

class Doira extends Figura{
    constructor(tomon){
        super()
        this.tomon = tomon
    }
    uzunlik(){
        return this.tomon*2*3.14
    }
}


class Kvadrat extends Figura{
    constructor(tomon){
        super();
        this.tomon = tomon;
    }
    yuza(){
        return this.tomon * this.tomon
    }
}

try{
    const figura = new Figura();
}catch(error){
    console.log(error.message)
};

try{
    const doira = new Doira(2)
}catch(error){
    console.log(error.message)
}

try{
    const kvadrat = new Kvadrat(3)
    console.log("muvoffaqiyatli")
}catch(error){
    console.log(error.message)
}


