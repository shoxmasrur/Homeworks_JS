class Figura{
    constructor(){

    }
    sayHI(){
        console.log("salom dunyo")
    }
}



obj = {
    sayBye(){
        console.log("ko'rishguncha")
    }
}

Object.assign(Figura.prototype, obj)
const figura = new Figura();
figura.sayBye()