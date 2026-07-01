const obj = {
    name:"Aziz", 
    _age: 32,
    address: "Toshkent"
}

Object.defineProperty(obj, "age", {

    get(){
        return this._age;
    },

    set(value){
        if(value<=0){
            console.log("Yosh faqat musbat son bo'lishi kerak")
            return;
        }else{
            this._age = value;
        }
        

    }
})

obj.age = 10;
console.log(obj)