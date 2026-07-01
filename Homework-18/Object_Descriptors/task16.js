const obj = {
    name : "shohruh",
    age:32,
    _email: "SHOh1@"
}

Object.defineProperty(obj, "email",{
    get(){
        return this._email;
    },
    set(value){
        if(!value.includes("@") || value.length<5){
            console.error("siz xato email kiritdingiz")
        }else{
            this._email = value;
        }
    },
    enumerable:false
})
obj.email = "shohrush111@"
console.log(obj)
