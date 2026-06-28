const obj ={
    name: "Aziz",
    lastName: "Namozov"
};

Object.defineProperty( obj, "fullName",{
    get(){
        return `${this.name}  ${this.lastName}`
    },

    set(value){
       let [name,lastName] = value.split(" ")
        this.name = name,
        this.lastName = lastName
    },
    enumerable:true
    
});

obj.fullName ="Shohruh Toshpulatov"


console.log(obj.fullName)