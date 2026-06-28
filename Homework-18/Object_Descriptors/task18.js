obj = {
    name:"Aziz", 
    age: 32
}
Object.defineProperty(obj, "_address",{
    value:"toshkent",
    writable:true,
    enumerable:true,
    configurable:true
})


Object.defineProperty(obj, "counter",{
    value:0,
    writable:true,
    enumerable:false,
    configurable:true
})


Object.defineProperty(obj, "address",{
    get(){
        return this._address
    },

    set(value){
        
        if(this.counter<1){
             this._address =value;
        }else{
            console.log("faqat bir marta o'zgartirish mumkun")
        }
        this.counter++;
    }
})
console.log(obj)
obj.address = "CHilonzor"
console.log(obj)
obj.address = "Yakkasaroy"
console.log(obj)